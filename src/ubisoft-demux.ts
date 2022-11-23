/* eslint-disable @typescript-eslint/no-explicit-any */
import protobuf from 'protobufjs';
import debug from 'debug';
import type tls from 'tls';
import { DemuxSocket } from './demux-socket';
import { DemuxServiceName, getServiceType, ServiceDownstream, ServiceUpstream } from './proto-defs';
import { DemuxConnection } from './demux-connection';
import type {
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
  demux,
} from './generated';

export interface ServiceConnections {
  client_configuration_service: DemuxConnection<
    client_configuration_service.Upstream,
    client_configuration_service.Downstream & protobuf.Message
  >;
  cloudsave_service: DemuxConnection<
    cloudsave_service.Upstream,
    cloudsave_service.Downstream & protobuf.Message
  >;
  denuvo_service: DemuxConnection<
    denuvo_service.Upstream,
    denuvo_service.Downstream & protobuf.Message
  >;
  download_service: DemuxConnection<
    download_service.Upstream,
    download_service.Downstream & protobuf.Message
  >;
  friends_service: DemuxConnection<
    friends_service.Upstream,
    friends_service.Downstream & protobuf.Message
  >;
  ownership_service: DemuxConnection<
    ownership_service.Upstream,
    ownership_service.Downstream & protobuf.Message
  >;
  party_service: DemuxConnection<
    party_service.Upstream,
    party_service.Downstream & protobuf.Message
  >;
  playtime_service: DemuxConnection<
    playtime_service.Upstream,
    playtime_service.Downstream & protobuf.Message
  >;
  store_service: DemuxConnection<
    store_service.Upstream,
    store_service.Downstream & protobuf.Message
  >;
  utility_service: DemuxConnection<
    utility_service.Upstream,
    utility_service.Downstream & protobuf.Message
  >;
}

export interface UbisoftDemuxProps {
  host?: string;
  startRequestId?: number;
  timeout?: number;
  tlsConnectionOptions?: tls.ConnectionOptions;
}

export class UbisoftDemux {
  private host = 'dmx.upc.ubisoft.com';

  private debug = debug('ubisoft-demux');

  private timeout = 10000;

  public socket: DemuxSocket;

  public basicRequest;

  public destroy;

  constructor(props?: UbisoftDemuxProps) {
    this.host = props?.host ?? this.host;
    this.timeout = props?.timeout ?? this.timeout;
    this.socket = new DemuxSocket({
      host: this.host,
      startRequestId: props?.startRequestId || 0,
      timeout: this.timeout,
      tlsConnectionOptions: props?.tlsConnectionOptions,
    });
    this.basicRequest = this.socket.request.bind(this.socket);
    this.destroy = this.socket.destroy.bind(this.socket);
    this.debug('Initialized');
  }

  public async openConnection(
    serviceName: 'client_configuration_service'
  ): Promise<ServiceConnections['client_configuration_service']>;

  public async openConnection(
    serviceName: 'cloudsave_service'
  ): Promise<ServiceConnections['cloudsave_service']>;

  public async openConnection(
    serviceName: 'denuvo_service'
  ): Promise<ServiceConnections['denuvo_service']>;

  public async openConnection(
    serviceName: 'download_service'
  ): Promise<ServiceConnections['download_service']>;

  public async openConnection(
    serviceName: 'friends_service'
  ): Promise<ServiceConnections['friends_service']>;

  public async openConnection(
    serviceName: 'ownership_service'
  ): Promise<ServiceConnections['ownership_service']>;

  public async openConnection(
    serviceName: 'party_service'
  ): Promise<ServiceConnections['party_service']>;

  public async openConnection(
    serviceName: 'playtime_service'
  ): Promise<ServiceConnections['playtime_service']>;

  public async openConnection(
    serviceName: 'store_service'
  ): Promise<ServiceConnections['store_service']>;

  public async openConnection(
    serviceName: 'utility_service'
  ): Promise<ServiceConnections['utility_service']>;

  public async openConnection<
    UpType extends Record<string, any>,
    DownType extends Record<string, any>
  >(serviceName: DemuxServiceName): Promise<DemuxConnection<UpType, DownType>>;

  public async openConnection<
    UpType extends Record<string, any>,
    DownType extends Record<string, any>
  >(serviceName: DemuxServiceName): Promise<DemuxConnection<UpType, DownType>> {
    this.debug('Opening a new connection');
    const requestResp: Pick<demux.Rsp, 'openConnectionRsp'> = await this.socket.request({
      openConnectionReq: {
        serviceName,
      },
    });
    const connectionId = requestResp.openConnectionRsp?.connectionId;
    if (!connectionId) throw new Error(`Failed to establish connection for ${serviceName}`);
    return new DemuxConnection<UpType, DownType>({
      connectionId,
      serviceName,
      socket: this.socket,
      timeout: this.timeout,
    });
  }

  public async serviceRequest(
    service: 'client_configuration_service',
    payload: client_configuration_service.Upstream
  ): Promise<client_configuration_service.Downstream & protobuf.Message>;

  public async serviceRequest(
    service: 'cloudsave_service',
    payload: cloudsave_service.Upstream
  ): Promise<cloudsave_service.Downstream & protobuf.Message>;

  public async serviceRequest(
    service: 'denuvo_service',
    payload: denuvo_service.Upstream
  ): Promise<denuvo_service.Downstream & protobuf.Message>;

  public async serviceRequest(
    service: 'download_service',
    payload: download_service.Upstream
  ): Promise<download_service.Downstream & protobuf.Message>;

  public async serviceRequest(
    service: 'friends_service',
    payload: friends_service.Upstream
  ): Promise<friends_service.Downstream & protobuf.Message>;

  public async serviceRequest(
    service: 'ownership_service',
    payload: ownership_service.Upstream
  ): Promise<ownership_service.Downstream & protobuf.Message>;

  public async serviceRequest(
    service: 'party_service',
    payload: party_service.Upstream
  ): Promise<party_service.Downstream & protobuf.Message>;

  public async serviceRequest(
    service: 'playtime_service',
    payload: playtime_service.Upstream
  ): Promise<playtime_service.Downstream & protobuf.Message>;

  public async serviceRequest(
    service: 'store_service',
    payload: store_service.Upstream
  ): Promise<store_service.Downstream & protobuf.Message>;

  public async serviceRequest(
    service: 'utility_service',
    payload: utility_service.Upstream
  ): Promise<utility_service.Downstream & protobuf.Message>;

  public async serviceRequest<UpType, DownType>(
    service: string,
    payload: UpType
  ): Promise<DownType & protobuf.Message>;

  public async serviceRequest(
    service: DemuxServiceName,
    payload: ServiceUpstream
  ): Promise<ServiceDownstream & protobuf.Message> {
    this.debug('Encoding service data: %O', payload);
    const serviceUpstream = getServiceType(service, 'Upstream');
    const dataPayload = serviceUpstream.encode(payload).finish();

    const requestResp: Pick<demux.Rsp, 'serviceRsp'> = await this.socket.request({
      serviceRequest: {
        service,
        data: dataPayload as Buffer,
      },
    });

    const serviceDownstream = getServiceType(service, 'Downstream');
    const dataResp = serviceDownstream.decode(
      requestResp.serviceRsp?.data as Buffer
    ) as ServiceDownstream & protobuf.Message;
    this.debug('Decoded service data: %O', dataResp);
    return dataResp;
  }
}
