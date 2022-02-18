/* eslint-disable no-underscore-dangle */
import protobuf from 'protobufjs';
import debug from 'debug';
import * as demux from './generated/proto_demux/demux';
import * as client_configuration_service from './generated/proto_client_configuration/client_configuration';
import * as denuvo_service from './generated/proto_denuvo_service/denuvo_service';
import * as download_service from './generated/proto_download_service/download_service';
import * as friends_service from './generated/proto_friends/friends';
import * as ownership_service from './generated/proto_ownership/ownership';
import * as party_service from './generated/proto_party/party';
import * as playtime_service from './generated/proto_playtime/playtime';
import * as store_service from './generated/proto_store/store';
import * as utility_service from './generated/proto_utility/utility';
import { DemuxSocket } from './demux-socket';
import { DemuxServiceName, getServiceType } from './proto-defs';
import { DemuxConnection } from './demux-connection';

export interface UbisoftDemuxProps {
  host?: string;
  startRequestId?: number;
  timeout?: number;
}

export class UbisoftDemux {
  private host = 'dmx.upc.ubisoft.com';

  private debug = debug('ubisoft-demux');

  private startRequestId = 0;

  private timeout = 10000;

  private socket: DemuxSocket;

  public basicRequest;

  public destroy;

  constructor(props?: UbisoftDemuxProps) {
    this.host = props?.host ?? this.host;
    this.startRequestId = props?.startRequestId ?? this.startRequestId;
    this.timeout = props?.timeout ?? this.timeout;
    this.socket = new DemuxSocket({
      debug: this.debug,
      host: this.host,
      startRequestId: this.startRequestId,
      timeout: this.timeout,
    });
    this.basicRequest = this.socket.request.bind(this.socket);
    this.destroy = this.socket.destroy.bind(this.socket);
    this.debug('Initialized');
  }

  public async openConnection(
    serviceName: 'client_configuration_service',
    payload: client_configuration_service.Upstream
  ): Promise<
    DemuxConnection<
      client_configuration_service.Upstream,
      client_configuration_service.Downstream & protobuf.Message
    >
  >;

  public async openConnection(
    serviceName: 'denuvo_service',
    payload: denuvo_service.Upstream
  ): Promise<
    DemuxConnection<denuvo_service.Upstream, denuvo_service.Downstream & protobuf.Message>
  >;

  public async openConnection(
    serviceName: 'download_service',
    payload: download_service.Upstream
  ): Promise<
    DemuxConnection<download_service.Upstream, download_service.Downstream & protobuf.Message>
  >;

  public async openConnection(
    serviceName: 'friends_service',
    payload: friends_service.Upstream
  ): Promise<
    DemuxConnection<friends_service.Upstream, friends_service.Downstream & protobuf.Message>
  >;

  public async openConnection(
    serviceName: 'ownership_service',
    payload: ownership_service.Upstream
  ): Promise<
    DemuxConnection<ownership_service.Upstream, ownership_service.Downstream & protobuf.Message>
  >;

  public async openConnection(
    serviceName: 'party_service',
    payload: party_service.Upstream
  ): Promise<DemuxConnection<party_service.Upstream, party_service.Downstream & protobuf.Message>>;

  public async openConnection(
    serviceName: 'playtime_service',
    payload: playtime_service.Upstream
  ): Promise<
    DemuxConnection<playtime_service.Upstream, playtime_service.Downstream & protobuf.Message>
  >;

  public async openConnection(
    serviceName: 'store_service',
    payload: store_service.Upstream
  ): Promise<DemuxConnection<store_service.Upstream, store_service.Downstream & protobuf.Message>>;

  public async openConnection(
    serviceName: 'utility_service',
    payload: utility_service.Upstream
  ): Promise<
    DemuxConnection<utility_service.Upstream, utility_service.Downstream & protobuf.Message>
  >;

  public async openConnection<ReqType, RspType>(
    serviceName: DemuxServiceName
  ): Promise<DemuxConnection<ReqType, RspType>> {
    this.debug('Opening a new connection');
    const requestResp: Pick<demux.Rsp, 'openConnectionRsp'> = await this.socket.request({
      openConnectionReq: {
        serviceName,
      },
    });
    const connectionId = requestResp.openConnectionRsp?.connectionId;
    if (!connectionId) throw new Error(`Failed to establish connection for ${serviceName}`);
    return new DemuxConnection<ReqType, RspType>({
      connectionId,
      serviceName,
      socket: this.socket,
      debug: this.debug,
    });
  }

  public async serviceRequest(
    service: 'client_configuration_service',
    payload: client_configuration_service.Upstream
  ): Promise<client_configuration_service.Downstream & protobuf.Message>;

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

  public async serviceRequest<ReqType, RspType>(
    service: DemuxServiceName,
    payload: ReqType
  ): Promise<RspType & protobuf.Message> {
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
    const dataResp = serviceDownstream.decode(requestResp.serviceRsp?.data as Buffer) as RspType &
      protobuf.Message;
    this.debug('Decoded service data: %O', dataResp);
    return dataResp;
  }
}
