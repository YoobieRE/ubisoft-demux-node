import protobuf from 'protobufjs';
import glob from 'glob';

const protoFiles = glob.sync('proto/**/*.proto');
const packageDefinition = protobuf.loadSync(protoFiles);

export type StreamDirection = 'Upstream' | 'Downstream';

const demuxNs = packageDefinition.lookup('mg.protocol.demux') as protobuf.Namespace;
export const demuxUpstream = demuxNs.lookupType('Upstream');
export const demuxDownstream = demuxNs.lookupType('Downstream');

export type DemuxServiceName =
  | 'utility_service'
  | 'ownership_service'
  | 'denuvo_service'
  | 'store_service'
  | 'friends_service'
  | 'playtime_service'
  | 'party_service'
  | 'download_service'
  | 'client_configuration_service';

const serviceMap: Record<DemuxServiceName, protobuf.Namespace> = {
  utility_service: packageDefinition.lookup('mg.protocol.utility') as protobuf.Namespace,
  ownership_service: packageDefinition.lookup('mg.protocol.ownership') as protobuf.Namespace,
  denuvo_service: packageDefinition.lookup('mg.protocol.denuvo_service') as protobuf.Namespace,
  store_service: packageDefinition.lookup('mg.protocol.store') as protobuf.Namespace,
  friends_service: packageDefinition.lookup('mg.protocol.friends') as protobuf.Namespace,
  playtime_service: packageDefinition.lookup('mg.playtime') as protobuf.Namespace,
  party_service: packageDefinition.lookup('mg.protocol.party') as protobuf.Namespace,
  download_service: packageDefinition.lookup('mg.protocol.download_service') as protobuf.Namespace,
  client_configuration_service: packageDefinition.lookup(
    'mg.protocol.client_configuration'
  ) as protobuf.Namespace,
};

export const getServiceType = (
  name: DemuxServiceName,
  direction: StreamDirection
): protobuf.Type => {
  const serviceNs = serviceMap[name];
  if (!serviceNs) throw new Error(`Unknown service name: ${name}`);
  const serviceType = serviceNs.lookupType(direction);
  if (!serviceType)
    throw new Error(`Unknown type "${direction}" in namespace "${serviceNs.fullName}"`);
  return serviceType;
};
