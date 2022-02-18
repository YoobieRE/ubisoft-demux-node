import { Debugger } from 'debug';
import { DemuxSocket } from './demux-socket';
import { DemuxServiceName, getServiceType } from './proto-defs';
import { addLengthPrefix, stripLengthPrefix } from './util';
import * as demux from './generated/proto_demux/demux';

export interface DemuxConnectionProps {
  serviceName: DemuxServiceName;
  connectionId: number;
  socket: DemuxSocket;
  debug: Debugger;
}

export class DemuxConnection<ReqType, RspType> {
  public serviceName: DemuxServiceName;

  public connectionId: number;

  private socket: DemuxSocket;

  private debug: Debugger;

  constructor(props: DemuxConnectionProps) {
    this.serviceName = props.serviceName;
    this.connectionId = props.connectionId;
    this.socket = props.socket;
    this.debug = props.debug.extend(`connection${this.connectionId}`);
    this.debug('Connection established for %s', this.serviceName);
  }

  public async push(payload: ReqType): Promise<RspType & protobuf.Message> {
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
    const dataResp = serviceDownstream.decode(stripLengthPrefix(pushResp.data.data)) as RspType &
      protobuf.Message;
    this.debug('Decoded data: $O', dataResp);
    return dataResp;
  }
}
