import debug, { Debugger } from 'debug';
import type { demux } from './generated';
import { DemuxSocket } from './demux-socket';
import { DemuxServiceName, getServiceType } from './proto-defs';
import { addLengthPrefix, promiseTimeout, stripLengthPrefix } from './util';

export interface DemuxConnectionProps {
  serviceName: DemuxServiceName;
  connectionId: number;
  socket: DemuxSocket;
  timeout: number;
  startRequestId?: number;
}
interface AbstractUpstreamRequest {
  request: {
    requestId: number;
    [reqType: string]: unknown;
  };
}
interface AbstractDownstreamResponse {
  response: {
    requestId: number;
    [rspType: string]: unknown;
  };
}

export class DemuxConnection<UpType, DownType> {
  public serviceName: DemuxServiceName;

  public connectionId: number;

  private timeout: number;

  private socket: DemuxSocket;

  private debug: Debugger;

  private currentRequestId = 1;

  private pendingRequestResponses = new Map<number, (resp: DownType & protobuf.Message) => void>();

  constructor(props: DemuxConnectionProps) {
    this.serviceName = props.serviceName;
    this.connectionId = props.connectionId;
    this.timeout = props.timeout;
    this.socket = props.socket;
    this.currentRequestId = props.startRequestId ?? this.currentRequestId;
    this.debug = debug(`ubisoft-demux:connection${this.connectionId}`);
    this.socket.on('connectionData', this.handleConnectionData.bind(this));
    this.debug('Connection created for %s', this.serviceName);
  }

  private handleConnectionData(connectionId: number, connectionData: Buffer): void {
    this.debug(
      'Received connection data for connectionId %d: %s',
      connectionId,
      connectionData.toString('hex')
    );
    const serviceDownstream = getServiceType(this.serviceName, 'Downstream');
    const payload = serviceDownstream.decode(
      stripLengthPrefix(connectionData)
    ) as AbstractDownstreamResponse & protobuf.Message;
    this.debug('Decoded response: %O', payload);
    const requestId = payload?.response?.requestId;
    if (requestId !== undefined) {
      const cb = this.pendingRequestResponses.get(requestId);
      if (cb) {
        this.pendingRequestResponses.delete(requestId);
        cb(payload as unknown as DownType & protobuf.Message);
      }
    }
  }

  /**
   * Sends an inner service request payload via connection push
   * @param payload An inner service request payload to send
   * @returns The inner service response payload
   */
  public async push(payload: UpType): Promise<void> {
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
    await this.socket.push(pushPayload);
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
    await this.push(payload);
    const response = await promiseTimeout(
      this.timeout,
      new Promise<DownType & protobuf.Message<object>>((resolve) => {
        this.pendingRequestResponses.set(requestId, resolve);
      })
    );
    this.debug('Connection response data: %O', response);
    return response;
  }
}
