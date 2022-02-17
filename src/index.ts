/* eslint-disable no-underscore-dangle */
import protobuf from 'protobufjs';
import tls from 'tls';
import debug from 'debug';
import * as demux from './generated/proto/proto_demux/demux';
import { DemuxSocket } from './demux-socket';
import { demuxDownstream, DemuxServiceName, demuxUpstream, getServiceType } from './proto-defs';

const DEMUX_HOST = 'dmx.upc.ubisoft.com';

export interface UbisoftDemuxProps {
  host?: string;
  startRequestId?: number;
}

export class UbisoftDemux {
  private host = 'dmx.upc.ubisoft.com';

  private socket?: tls.TLSSocket;

  private debug = debug('ubisoft-demux');

  private startRequestId = 0;

  constructor(props?: UbisoftDemuxProps) {
    this.host = props?.host ?? this.host;
    this.startRequestId = props?.startRequestId ?? this.startRequestId;
  }
}

const decodeRequests = (payloads: any[]): any[] => {
  const openServiceRequests = new Map<number, string>();
  const openConnectionRequests = new Map<number, string>();
  const openConnections = new Map<number, string>();
  const decodedDemux = payloads.map((payload) => {
    const schema = payload.direction === 'Upstream' ? demuxUpstream : demuxDownstream;
    const body = schema.decode(payload.data) as
      | (protobuf.Message & demux.Upstream)
      | (protobuf.Message & demux.Downstream);

    // Service requests/responses
    if ('request' in body && body.request?.serviceRequest) {
      const { requestId } = body.request;
      const { data, service } = body.request.serviceRequest;
      const dataType = getServiceType(service as DemuxServiceName, payload.direction);
      const decodedData = dataType.decode(data) as never;
      openServiceRequests.set(requestId, service);
      const updatedBody = body.toJSON();
      updatedBody.request.serviceRequest.data = decodedData;
      return updatedBody;
    }
    if ('response' in body && body.response?.serviceRsp) {
      const { requestId } = body.response;
      const { data } = body.response.serviceRsp;
      const serviceName = openServiceRequests.get(requestId) as string;
      const dataType = getServiceType(serviceName as DemuxServiceName, payload.direction);
      const decodedData = dataType.decode(data) as never;
      openServiceRequests.delete(requestId);
      const updatedBody = body.toJSON();
      updatedBody.response.serviceRsp.data = decodedData;
      return updatedBody;
    }

    // Connection requests/responses
    if ('request' in body && body.request?.openConnectionReq) {
      const { requestId } = body.request;
      const { serviceName } = body.request.openConnectionReq;
      openConnectionRequests.set(requestId, serviceName);
    }
    if ('response' in body && body.response?.openConnectionRsp) {
      const { requestId } = body.response;
      const { connectionId } = body.response.openConnectionRsp;
      const serviceName = openConnectionRequests.get(requestId) as string;
      openConnections.set(connectionId, serviceName);
      openConnectionRequests.delete(requestId);
    }

    // Connection pushes/closed
    if ('push' in body && body.push?.data) {
      const { connectionId, data } = body.push.data;
      const serviceName = openConnections.get(connectionId) as string;
      const dataType = getServiceType(serviceName as DemuxServiceName, payload.direction);
      const trimmedPush = data.subarray(4); // First 4 bytes are length
      const decodedData = dataType.decode(trimmedPush) as never;
      const updatedBody = body.toJSON();
      updatedBody.push.data.data = decodedData;
      return updatedBody;
    }
    if ('push' in body && body.push?.connectionClosed) {
      const { connectionId } = body.push.connectionClosed;
      openConnections.delete(connectionId);
    }
    return body.toJSON();
  });
  return decodedDemux;
};

const main = async () => {
  const demuxSocket = new DemuxSocket({
    debug: debug('ubisoft-demux'),
    host: DEMUX_HOST,
    startRequestId: 0,
    timeout: 10000,
  });

  const getPatchInfoReq: Omit<demux.Req, 'requestId'> = {
    getPatchInfoReq: {
      patchTrackId: '129.0',
      testConfig: false,
      trackType: 0,
    },
  };

  const resp = await demuxSocket.makeRequest(getPatchInfoReq);

  console.log('response:', resp);
};

main().catch((err) => console.error(err));
