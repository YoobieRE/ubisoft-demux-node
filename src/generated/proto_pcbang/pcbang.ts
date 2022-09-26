/* eslint-disable */

export const protobufPackage = "mg.pcbang";

export enum Result {
  OK = 0,
  Error = 1,
  InvalidIp = 2,
  NoPoints = 3,
  Timeout = 4,
  UNRECOGNIZED = -1,
}

export enum SpendingAction {
  Start = 0,
  Ping = 1,
  End = 2,
  UNRECOGNIZED = -1,
}

export interface InitializeReq {
  provider: string;
}

export interface InitializeRsp {
  result: Result;
  preOwnershipTokens: string[];
}

export interface NeowizSpendPointsReq {
  productId: number;
  spendingAction: SpendingAction;
}

export interface NeowizSpendPointsRsp {
  result: Result;
  token: string;
  errorMsg: string;
}

export interface Req {
  requestId: number;
  initializeReq?: InitializeReq | undefined;
  neowizSpendPointsReq?: NeowizSpendPointsReq | undefined;
}

export interface Rsp {
  requestId: number;
  initializeRsp?: InitializeRsp | undefined;
  neowizSpendPointsRsp?: NeowizSpendPointsRsp | undefined;
}

export interface Upstream {
  request?: Req;
}

export interface Downstream {
  response?: Rsp;
}
