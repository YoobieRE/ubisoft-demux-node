import type { Debugger } from 'debug';
import type { demux } from './generated';
import { DemuxSocket } from './demux-socket';
import { DemuxServiceName, getServiceType } from './proto-defs';
import { addLengthPrefix, stripLengthPrefix } from './util';

export interface DemuxConnectionProps {
  serviceName: DemuxServiceName;
  connectionId: number;
  socket: DemuxSocket;
  debug: Debugger;
  startRequestId?: number;
}
interface AbstractUpstreamRequest {
  request: {
    requestId: number;
    [reqType: string]: unknown;
  };
}

export class DemuxConnection<UpType, DownType> {
  public serviceName: DemuxServiceName;

  public connectionId: number;

  private socket: DemuxSocket;

  private debug: Debugger;

  private currentRequestId = 1;

  constructor(props: DemuxConnectionProps) {
    this.serviceName = props.serviceName;
    this.connectionId = props.connectionId;
    this.socket = props.socket;
    this.currentRequestId = props.startRequestId ?? this.currentRequestId;
    this.debug = props.debug.extend(`connection${this.connectionId}`);
    this.debug('Connection created for %s', this.serviceName);
  }

  /**
   * Sends an inner service request payload via connection push
   * @param payload An inner service request payload to send
   * @returns The inner service response payload
   */
  public async push(payload: UpType): Promise<DownType & protobuf.Message> {
    this.debug('Encoding connection data: %O', payload);
    const serviceUpstream = getServiceType(this.serviceName, 'Upstream');
    const dataPayload = serviceUpstream.encode(payload).finish();
    const prefixedDataPayload = addLengthPrefix(dataPayload);

    const pushPayload: Required<Pick<demux.Push, 'data'>> = {
      data: {
        connectionId: this.connectionId,
        data: prefixedDataPayload,
      },
    };
    const pushResp = await this.socket.push(pushPayload);
    const serviceDownstream = getServiceType(this.serviceName, 'Downstream');
    const dataResp = serviceDownstream.decode(stripLengthPrefix(pushResp.data.data)) as DownType &
      protobuf.Message;
    this.debug('Decoded data: $O', dataResp);
    return dataResp;
  }

  /**
   * Tracks and increments requestId for sending service requests inside a connection push
   * @param payload An inner service request payload to send
   * @returns The inner service response payload
   */
  public async request(payload: UpType): Promise<DownType & protobuf.Message> {
    const requestId = this.currentRequestId;
    this.currentRequestId += 1;
    const fullPayload = payload as unknown as AbstractUpstreamRequest;
    fullPayload.request.requestId = requestId;
    this.debug('Connection request data: %O', fullPayload);
    const response = await this.push(payload);
    this.debug('Connection response data: %O', response);
    return response;
  }
}
