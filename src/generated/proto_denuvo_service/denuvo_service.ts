/* eslint-disable */
export const protobufPackage = 'mg.protocol.denuvo_service';

export interface GetGameTokenReq {
  ownershipToken: string;
  requestToken: Buffer;
}

export interface GetGameTokenRsp {
  gameToken: Buffer;
}

export interface GetGameTimeTokenReq {
  ownershipToken: string;
  requestToken: Buffer;
}

export interface GetGameTimeTokenRsp {
  timeToken: Buffer;
  timeTokenTtlSec: number;
}

export interface Req {
  requestId: number;
  getGameTokenReq?: GetGameTokenReq;
  getGameTimeTokenReq?: GetGameTimeTokenReq;
}

export interface Rsp {
  requestId: number;
  result: Rsp_Result;
  getGameTokenRsp?: GetGameTokenRsp;
  getGameTimeTokenRsp?: GetGameTimeTokenRsp;
}

export enum Rsp_Result {
  Success = 0,
  NotOwned = 1,
  Failure = 2,
  ExceededActivations = 3,
  TimeOut = 4,
  ServerError = 5,
  UNRECOGNIZED = -1,
}

export interface Upstream {
  request?: Req;
}

export interface Downstream {
  response?: Rsp;
}
