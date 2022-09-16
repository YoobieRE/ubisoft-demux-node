import debug, { Debugger } from 'debug';
import { once } from 'events';
import tls from 'tls';
import { API_VERSION } from './constants';
import { DemuxError } from './demux-error';
import type { demux } from './generated';
import { demuxDownstream, demuxUpstream } from './proto-defs';
import { BaseEmitter } from './typed-emitter';
import { addLengthPrefix, promiseTimeout, stripLengthPrefix } from './util';

export interface DemuxSocketProps {
  host: string;
  startRequestId: number;
  timeout: number;
  tlsConnectionOptions?: tls.ConnectionOptions;
}

type RespFn = (resp: demux.Downstream & protobuf.Message) => void;

export type DemuxSocketEvents = {
  connectionData: (connectionId: number, connectionData: Buffer) => void;
  push: (payload: demux.Downstream & protobuf.Message) => void;
};

export class DemuxSocket extends BaseEmitter<DemuxSocketEvents> {
  private host: string;

  private debug: Debugger;

  private currentRequestId: number;

  private timeout: number;

  private tlsConnectionOptions?: tls.ConnectionOptions;

  private socket?: tls.TLSSocket;

  private pendingRequestResponses = new Map<number, RespFn>();

  private incomingPayloadBuffer: Buffer | null = null;

  private incomingPayloadLength = 0;

  constructor(props: DemuxSocketProps) {
    super();
    this.host = props.host;
    this.debug = debug('ubisoft-demux:socket');
    this.currentRequestId = props.startRequestId;
    this.timeout = props.timeout;
    this.tlsConnectionOptions = props.tlsConnectionOptions;
  }

  private async getSocket(): Promise<tls.TLSSocket> {
    if (this.socket) return this.socket;
    this.debug('Creating TLS connection');
    this.socket = tls.connect({
      port: 443,
      host: this.host,
      servername: this.host,
      ...this.tlsConnectionOptions,
    });
    await once(this.socket, 'connect');
    this.debug = debug(`ubisoft-demux:p${this.socket.localPort}`);
    this.debug('Connected to socket from local port %d', this.socket.localPort);
    this.socket.on('data', this.handleDownstreamData.bind(this));
    // The clientVersion must be established as the first call on socket creation
    await this.push({
      clientVersion: {
        version: API_VERSION,
      },
    });
    return this.socket;
  }

  private async write(buffer: Uint8Array): Promise<void> {
    const socket = await this.getSocket();
    await new Promise((resolve, reject) => {
      socket.write(buffer, (err) => {
        if (err) reject(err);
        resolve(undefined);
      });
    });
  }

  private handleDownstreamData(data: Buffer): void {
    this.debug('Received incoming data: %s', data.toString('hex'));
    if (this.incomingPayloadBuffer === null) {
      this.incomingPayloadLength = data.readUInt32BE();
      this.debug('Expecting incoming payload with length of %d bytes', this.incomingPayloadLength);
      this.incomingPayloadBuffer = stripLengthPrefix(data);
    } else {
      this.incomingPayloadBuffer = Buffer.concat([this.incomingPayloadBuffer, data]);
    }
    if (this.incomingPayloadBuffer.length === this.incomingPayloadLength) {
      const fullBuffer = this.incomingPayloadBuffer;
      this.incomingPayloadBuffer = null; // Reset the buffer

      this.debug('Decoding response data: %s');
      const decodedDownstream = demuxDownstream.decode(fullBuffer) as demux.Downstream &
        protobuf.Message;
      this.debug('Decoded response: %O', decodedDownstream);
      if (decodedDownstream.response) {
        const requestId = decodedDownstream.response?.requestId;
        if (requestId !== undefined) {
          const cb = this.pendingRequestResponses.get(requestId);
          if (cb) {
            this.debug('Responding to service request: %d', requestId);
            this.pendingRequestResponses.delete(requestId);
            cb(decodedDownstream);
          }
        }
      }
      if (decodedDownstream.push) {
        const connectionId = decodedDownstream.push.data?.connectionId;
        const connectionData = decodedDownstream.push.data?.data;
        if (connectionId !== undefined && connectionData) {
          this.debug('Emitting connectionData: %d', connectionId);
          this.emit('connectionData', connectionId, connectionData);
        } else {
          this.debug('Emitting push event');
          this.emit('push', decodedDownstream);
        }
      }
    }
  }

  // public async request(
  //   payload: Omit<Pick<demux.Req, 'serviceRequest'>, 'requestId'>
  // ): Promise<Required<Pick<demux.Rsp, 'serviceRsp'>>>;

  public async request(
    payload: Omit<demux.Req, 'requestId'>
  ): Promise<demux.Rsp & protobuf.Message> {
    const requestId = this.currentRequestId;
    this.currentRequestId += 1;
    const fullPayload: demux.Upstream = {
      request: { ...payload, requestId },
    };
    this.debug('Sending request: %j', fullPayload);
    const encodedPayload = demuxUpstream.encode(fullPayload).finish();
    const prefixedPayload = addLengthPrefix(encodedPayload);
    const reqHex = prefixedPayload.toString('hex');
    this.debug('Raw request (hex): %s', reqHex);
    this.debug('Sending requestId: %d', requestId);
    const [decodedResp] = await Promise.all([
      promiseTimeout(
        this.timeout,
        new Promise<demux.Downstream & protobuf.Message<object>>((resolve) => {
          this.pendingRequestResponses.set(requestId, resolve);
        }),
        new DemuxError(fullPayload)
      ),
      this.write(prefixedPayload),
    ]);
    return decodedResp.response as demux.Rsp & protobuf.Message;
  }

  public async push(payload: demux.Push): Promise<void> {
    const connectionId = payload.data?.connectionId;
    const fullPayload: demux.Upstream = { push: payload };
    this.debug('Sending push: %O', fullPayload);
    const encodedPayload = demuxUpstream.encode(fullPayload).finish();
    const prefixedPayload = addLengthPrefix(encodedPayload);
    const reqHex = prefixedPayload.toString('hex');
    this.debug('Raw request (hex): %s', reqHex);

    await this.write(prefixedPayload);
    if (connectionId) this.debug('Sent connectionId: %d', connectionId);
  }

  public async destroy(error?: Error | undefined): Promise<void> {
    if (this.socket) {
      this.debug('Destroying socket');
      this.socket.destroy(error);
      this.debug('Socket destroyed');
    }
  }
}
