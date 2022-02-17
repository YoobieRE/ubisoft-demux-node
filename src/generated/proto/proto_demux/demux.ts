/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'mg.protocol.demux';

export interface Token {
  ubiTicket: string;
  orbitToken: string;
  ubiToken: Buffer;
}

export interface AuthenticateReq {
  token?: Token;
  sendKeepAlive: boolean;
  clientId: string;
  logoutPushGroupId: string;
}

export interface AuthenticateRsp {
  success: boolean;
  expired: boolean;
  banned: boolean;
}

export interface OpenConnectionReq {
  serviceName: string;
}

export interface OpenConnectionRsp {
  connectionId: number;
  success: boolean;
}

export interface KeepAlivePush {}

export interface DataMessage {
  connectionId: number;
  data: Buffer;
}

export interface ClientVersionPush {
  version: number;
}

export interface ClientOutdatedPush {}

export interface ProductStartedPush {
  productId: number;
}

export interface ProductEndedPush {
  productId: number;
}

export interface ConnectionClosedPush {
  connectionId: number;
  errorCode: ConnectionClosedPush_ConnectionErrorCode;
}

export enum ConnectionClosedPush_ConnectionErrorCode {
  Connection_ForceQuit = 1,
  Connection_MultipleLogin = 2,
  Connection_Banned = 3,
  UNRECOGNIZED = -1,
}

export interface GetPatchInfoReq {
  patchTrackId: string;
  testConfig: boolean;
  trackType: number;
}

export interface GetPatchInfoRsp {
  success: boolean;
  patchTrackId: string;
  testConfig: boolean;
  patchBaseUrl: string;
  latestVersion: number;
  trackType: number;
}

export interface ServiceReq {
  service: string;
  data: Buffer;
}

export interface ServiceRsp {
  success: boolean;
  data: Buffer;
}

export interface Req {
  requestId: number;
  authenticateReq?: AuthenticateReq;
  getPatchInfoReq?: GetPatchInfoReq;
  serviceRequest?: ServiceReq;
  openConnectionReq?: OpenConnectionReq;
  clientIpOverride?: number;
}

export interface Rsp {
  requestId: number;
  authenticateRsp?: AuthenticateRsp;
  openConnectionRsp?: OpenConnectionRsp;
  getPatchInfoRsp?: GetPatchInfoRsp;
  serviceRsp?: ServiceRsp;
}

export interface Push {
  data?: DataMessage;
  connectionClosed?: ConnectionClosedPush;
  keepAlive?: KeepAlivePush;
  clientVersion?: ClientVersionPush;
  clientOutdated?: ClientOutdatedPush;
  productStarted?: ProductStartedPush;
  productEnded?: ProductEndedPush;
}

export interface Upstream {
  request?: Req;
  push?: Push;
}

export interface Downstream {
  response?: Rsp;
  push?: Push;
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
