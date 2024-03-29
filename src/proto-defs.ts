import protobuf from 'protobufjs';
import glob from 'glob';
import {
  client_configuration_service,
  cloudsave_service,
  denuvo_service,
  download_service,
  friends_service,
  ownership_service,
  party_service,
  playtime_service,
  store_service,
  utility_service,
} from './generated';

const protoFiles = glob.sync(`${__dirname}/../proto/**/*.proto`);
export const packageDefinition = protobuf.loadSync(protoFiles);

export type StreamDirection = 'Upstream' | 'Downstream';

const demuxNs = packageDefinition.lookup('mg.protocol.demux') as protobuf.Namespace;
export const demuxUpstream = demuxNs.lookupType('Upstream');
export const demuxDownstream = demuxNs.lookupType('Downstream');

export type DemuxServiceName =
  | 'client_configuration_service'
  | 'cloudsave_service'
  | 'denuvo_service'
  | 'download_service'
  | 'friends_service'
  | 'ownership_service'
  | 'party_service'
  | 'playtime_service'
  | 'store_service'
  | 'utility_service';

const serviceMap: Record<DemuxServiceName, protobuf.Namespace> = {
  client_configuration_service: packageDefinition.lookup(
    'mg.protocol.client_configuration'
  ) as protobuf.Namespace,
  cloudsave_service: packageDefinition.lookup(
    'mg.protocol.cloudsave_service'
  ) as protobuf.Namespace,
  denuvo_service: packageDefinition.lookup('mg.protocol.denuvo_service') as protobuf.Namespace,
  download_service: packageDefinition.lookup('mg.protocol.download_service') as protobuf.Namespace,
  friends_service: packageDefinition.lookup('mg.protocol.friends') as protobuf.Namespace,
  ownership_service: packageDefinition.lookup('mg.protocol.ownership') as protobuf.Namespace,
  party_service: packageDefinition.lookup('mg.protocol.party') as protobuf.Namespace,
  playtime_service: packageDefinition.lookup('mg.playtime') as protobuf.Namespace,
  store_service: packageDefinition.lookup('mg.protocol.store') as protobuf.Namespace,
  utility_service: packageDefinition.lookup('mg.protocol.utility') as protobuf.Namespace,
};

export type ServiceUpstream =
  | client_configuration_service.Upstream
  | cloudsave_service.Upstream
  | denuvo_service.Upstream
  | download_service.Upstream
  | friends_service.Upstream
  | ownership_service.Upstream
  | party_service.Upstream
  | playtime_service.Upstream
  | store_service.Upstream
  | utility_service.Upstream;

export type ServiceDownstream =
  | client_configuration_service.Downstream
  | cloudsave_service.Downstream
  | denuvo_service.Downstream
  | download_service.Downstream
  | friends_service.Downstream
  | ownership_service.Downstream
  | party_service.Downstream
  | playtime_service.Downstream
  | store_service.Downstream
  | utility_service.Downstream;

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
