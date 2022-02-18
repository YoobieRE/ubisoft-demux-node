/* eslint-disable no-underscore-dangle */
import protobuf from 'protobufjs';
import debug from 'debug';
import * as demux from './generated/proto/proto_demux/demux';
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
