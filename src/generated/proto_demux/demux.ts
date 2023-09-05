/* eslint-disable */

export const protobufPackage = "mg.protocol.demux";

export interface Token {
  ubiTicket?: string;
  orbitToken?: string;
  ubiToken?: Buffer;
}

export interface AuthenticateReq {
  token?: Token | undefined;
  sendKeepAlive: boolean;
  clientId: string;
  logoutPushGroupId?: string;
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

export interface KeepAlivePush {
}

export interface DataMessage {
  connectionId: number;
  data: Buffer;
}

export interface ClientVersionPush {
  version: number;
}

export interface ClientOutdatedPush {
}

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
  authenticateRsp?: AuthenticateRsp | undefined;
  openConnectionRsp?: OpenConnectionRsp | undefined;
  getPatchInfoRsp?: GetPatchInfoRsp | undefined;
  serviceRsp?: ServiceRsp | undefined;
}

export interface Push {
  data?: DataMessage | undefined;
  connectionClosed?: ConnectionClosedPush | undefined;
  keepAlive?: KeepAlivePush | undefined;
  clientVersion?: ClientVersionPush | undefined;
  clientOutdated?: ClientOutdatedPush | undefined;
  productStarted?: ProductStartedPush | undefined;
  productEnded?: ProductEndedPush | undefined;
}

export interface Upstream {
  request?: Req | undefined;
  push?: Push | undefined;
}

export interface Downstream {
  response?: Rsp | undefined;
  push?: Push | undefined;
}
