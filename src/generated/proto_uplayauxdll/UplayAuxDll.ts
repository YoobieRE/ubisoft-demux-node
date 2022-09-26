/* eslint-disable */

export const protobufPackage = "mg.protocol.uplayauxdll";

export enum OperationResult {
  ok = 1,
  invalidArgument = 2,
  connectionError = 3,
  UNRECOGNIZED = -1,
}

export enum InitResult {
  InitResult_Success = 1,
  InitResult_Failure = 2,
  InitResult_ReconnectRequired = 3,
  UNRECOGNIZED = -1,
}

export enum ErrorType {
  ErrorType_ActivationLimitExceeded = 1,
  ErrorType_ActivationFailed = 2,
  ErrorType_NoOnlineConnection = 3,
  ErrorType_NoOwnership = 4,
  ErrorType_Timeout = 5,
  ErrorType_InternalServerError = 6,
  ErrorType_ErrorDetailCodeOnly = 7,
  UNRECOGNIZED = -1,
}

export interface DevArgs {
  uatOnly: boolean;
}

export interface InitReq {
  uplayId: number;
  devArgs?: DevArgs;
}

export interface InitRsp {
  result: InitResult;
  uplayPID: number;
}

export interface InvalidateCachedTokenReq {
}

export interface GetCachedOrFreshTokenReq {
  requestToken: Buffer;
}

export interface GetBurnTicketReq {
  requestToken: Buffer;
}

export interface GetCachedOrFreshTokenRsp {
  result: OperationResult;
  errorCode: number;
  gameToken: Buffer;
}

export interface GetBurnTicketRsp {
  result: OperationResult;
  errorCode: number;
  burnTicket: Buffer;
  gracePeriodSec: number;
}

export interface ActivateReq {
  invalidateCachedTokenReq?: InvalidateCachedTokenReq;
  getCachedOrFreshTokenReq?: GetCachedOrFreshTokenReq;
  getBurnTicketReq?: GetBurnTicketReq;
}

export interface ActivateRsp {
  getCachedOrFreshTokenRsp?: GetCachedOrFreshTokenRsp;
  getBurnTicketRsp?: GetBurnTicketRsp;
}

export interface Req {
  requestId: number;
  initReq?: InitReq;
  activateReq?: ActivateReq;
}

export interface Rsp {
  requestId: number;
  initRsp?: InitRsp;
  activateRsp?: ActivateRsp;
}
