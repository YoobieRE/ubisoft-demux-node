/* eslint-disable */

export const protobufPackage = "mg.protocol.orbitdll";

export interface GetLoginDetailsReq {
}

export interface GetLoginDetailsRsp {
  username: string;
  password: string;
  cdkey: string;
}

export interface GetOsiReq {
  subId: number;
}

export interface GetOsiRsp {
  pipename: string;
  status: GetOsiRsp_Status;
}

export enum GetOsiRsp_Status {
  Ok = 0,
  Failed = 1,
  UNRECOGNIZED = -1,
}

export interface InitReq {
  uplayId: number;
}

export interface InitRsp {
  savegameStoragePath: string;
  success: boolean;
}

export interface Req {
  requestId: number;
  getLoginDetails?: GetLoginDetailsReq | undefined;
  getOsi?: GetOsiReq | undefined;
  init?: InitReq | undefined;
}

export interface Rsp {
  requestId: number;
  getLoginDetails?: GetLoginDetailsRsp | undefined;
  getOsi?: GetOsiRsp | undefined;
  init?: InitRsp | undefined;
}
