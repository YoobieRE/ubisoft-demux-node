/* eslint-disable */
export const protobufPackage = 'mg.protocol.cloudsave_service';

export interface OptionalArgs {
  writeLength: number;
  md5Base64: string;
}

export interface Item {
  itemName: string;
  optionalArgs?: OptionalArgs;
}

export interface CloudsaveUrlReq {
  ownershipToken: string;
  uplayId: number;
  method: CloudsaveUrlReq_Method;
  items: Item[];
}

export enum CloudsaveUrlReq_Method {
  Method_Unknown = 0,
  Method_Put = 1,
  Method_Get = 2,
  Method_Delete = 3,
  UNRECOGNIZED = -1,
}

export interface CloudsaveUrlRsp {
  status: CloudsaveUrlRsp_Status;
  httpReqs: CloudsaveUrlRsp_HttpReq[];
}

export enum CloudsaveUrlRsp_Status {
  Status_Unknown = 0,
  Status_Ok = 1,
  Status_InternalError = 2,
  Status_Denied = 3,
  UNRECOGNIZED = -1,
}

export interface CloudsaveUrlRsp_HttpReq {
  header: string;
  url: string;
}

export interface Req {
  requestId: number;
  cloudsaveUrlReq?: CloudsaveUrlReq;
}

export interface Rsp {
  requestId: number;
  cloudsaveUrlRsp?: CloudsaveUrlRsp;
}

export interface Upstream {
  request?: Req;
}

export interface Downstream {
  response?: Rsp;
}
