import { Debugger } from 'debug';
import { once } from 'events';
import tls from 'tls';
import * as demux from './generated/proto/proto_demux/demux';
import { demuxDownstream, demuxUpstream } from './proto-defs';
import { addLengthPrefix, promiseTimeout } from './util';

export interface DemuxSocketProps {
  host: string;
  startRequestId: number;
  debug: Debugger;
  timeout: number;
}

type RespFn = (resp: demux.Downstream & protobuf.Message) => void;

export class DemuxSocket {
  private host: string;

  private debug: Debugger;

  private currentRequestId: number;

  private timeout: number;

  private socket?: tls.TLSSocket;

  private pendingRequestResponses = new Map<number, RespFn>();

  private pendingConnectionResponses = new Map<number, RespFn>();

  constructor(props: DemuxSocketProps) {
    this.host = props.host;
    this.debug = props.debug.extend('socket');
    this.currentRequestId = props.startRequestId;
    this.timeout = props.timeout;
  }

  private async getSocket(): Promise<tls.TLSSocket> {
    if (this.socket) return this.socket;
    this.debug('Creating TLS connection');
    this.socket = tls.connect({
      port: 443,
      host: this.host,
      servername: this.host,
      // ecdhCurve: ['x25519', 'secp256r1', 'secp384r1'].join(':'),
      // sigalgs: [
      //   'rsa_pss_rsae_sha256',
      //   'rsa_pss_rsae_sha384',
      //   'rsa_pss_rsae_sha512',
      //   'rsa_pkcs1_sha256',
      //   'rsa_pkcs1_sha384',
      //   'rsa_pkcs1_sha1',
      //   'ecdsa_secp256r1_sha256',
      //   'ecdsa_secp384r1_sha384',
      //   'ecdsa_sha1',
      //   'SHA1 DSA',
      //   'rsa_pkcs1_sha512',
      //   'ecdsa_secp521r1_sha512',
      // ].join(':'),
      // enableTrace: true,
    });
    await once(this.socket, 'connect');
    this.debug = this.debug.extend(`p${this.socket.localPort}`);
    this.debug('Connected to socket from local port %d', this.socket.localPort);
    this.socket.on('data', this.handleDownstreamData.bind(this));
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

  private handleDownstreamData(data: Buffer) {
    this.debug('Decoding response data');
    const decodedDownstream = demuxDownstream.decode(data) as demux.Downstream & protobuf.Message;
    this.debug('Received response: %O', decodedDownstream);
    const requestId = decodedDownstream.response?.requestId;
    const connectionId = decodedDownstream.push?.data?.connectionId;
    if (requestId !== undefined) {
      const cb = this.pendingRequestResponses.get(requestId);
      if (cb) {
        this.pendingRequestResponses.delete(requestId);
        cb(decodedDownstream);
      }
    }
    if (connectionId !== undefined) {
      const cb = this.pendingConnectionResponses.get(connectionId);
      if (cb) {
        this.pendingRequestResponses.delete(connectionId);
        cb(decodedDownstream);
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
    this.debug('Sending request: %O', fullPayload);
    const encodedPayload = demuxUpstream.encode(fullPayload).finish();
    const prefixedPayload = addLengthPrefix(encodedPayload);
    const reqHex = prefixedPayload.toString('hex');
    this.debug('Raw request (hex): %s', reqHex);

    await this.write(prefixedPayload);
    this.debug('Sent requestId: %d', requestId);

    const decodedResp = await promiseTimeout(
      this.timeout,
      new Promise<demux.Downstream & protobuf.Message<object>>((resolve) => {
        this.pendingRequestResponses.set(requestId, resolve);
      })
    );
    return decodedResp.response as demux.Rsp & protobuf.Message;
  }

  public async push(
    payload: Required<Pick<demux.Push, 'data'>>
  ): Promise<Required<Pick<demux.Push, 'data'>>>;

  public async push(payload: Omit<demux.Push, 'data'>): Promise<undefined>;

  public async push(payload: demux.Push): Promise<demux.Push | undefined> {
    const connectionId = payload.data?.connectionId;
    const fullPayload: demux.Upstream = { push: payload };
    this.debug('Sending push: %O', fullPayload);
    const encodedPayload = demuxUpstream.encode(fullPayload).finish();
    const prefixedPayload = addLengthPrefix(encodedPayload);
    const reqHex = prefixedPayload.toString('hex');
    this.debug('Raw request (hex): %s', reqHex);

    await this.write(prefixedPayload);
    if (!connectionId) return undefined;

    this.debug('Sent connectionId: %d', connectionId);
    const decodedResp = await promiseTimeout(
      this.timeout,
      new Promise<demux.Downstream & protobuf.Message<object>>((resolve) => {
        this.pendingConnectionResponses.set(connectionId, resolve);
      })
    );
    return decodedResp.push as demux.Push;
  }

  public async destroy(error?: Error | undefined): Promise<void> {
    if (this.socket) {
      this.debug('Destroying socket');
      this.socket.destroy(error);
      this.debug('Socket destroyed');
    }
  }
}
