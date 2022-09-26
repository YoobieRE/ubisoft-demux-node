/* eslint-disable */

export const protobufPackage = "mg.protocol.cloudsave_service";

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

export interface CloudsaveReq {
  uplayId: number;
  username: string;
  ownershipToken: string;
  putItem?: CloudsaveReq_PutItem | undefined;
  getItem?: CloudsaveReq_GetItem | undefined;
  deleteItem?: CloudsaveReq_DeleteItem | undefined;
  listItems?: CloudsaveReq_ListItems | undefined;
}

export interface CloudsaveReq_PutItem {
  itemId: number;
  writeLength: number;
  md5Base64: string;
}

export interface CloudsaveReq_GetItem {
  itemId: number;
}

export interface CloudsaveReq_ListItems {
}

export interface CloudsaveReq_DeleteItem {
  itemId: number;
}

export interface CloudsaveRsp {
  status: CloudsaveRsp_Status;
  methodString: string;
  pathString: string;
  hostString: string;
  headerString: string;
}

export enum CloudsaveRsp_Status {
  Status_Ok = 0,
  Status_InternalError = 1,
  Status_Denied = 2,
  UNRECOGNIZED = -1,
}

export interface CloudsaveReqV2 {
  uplayId: number;
  ownershipToken: string;
  putItems?: CloudsaveReqV2_PutItems | undefined;
  getItems?: CloudsaveReqV2_GetItems | undefined;
  deleteItems?: CloudsaveReqV2_DeleteItems | undefined;
}

export interface CloudsaveReqV2_PutItems {
  items: CloudsaveReqV2_PutItems_Item[];
}

export interface CloudsaveReqV2_PutItems_Item {
  itemId: number;
  writeLength: number;
  md5Base64: string;
  itemName: string;
}

export interface CloudsaveReqV2_GetItems {
  items: CloudsaveReqV2_GetItems_Item[];
}

export interface CloudsaveReqV2_GetItems_Item {
  itemId: number;
  itemName: string;
}

export interface CloudsaveReqV2_DeleteItems {
  items: CloudsaveReqV2_DeleteItems_Item[];
}

export interface CloudsaveReqV2_DeleteItems_Item {
  itemId: number;
  itemName: string;
}

export interface CloudsaveRspV2 {
  status: CloudsaveRspV2_Status;
  httpReqs: CloudsaveRspV2_HttpReq[];
}

export enum CloudsaveRspV2_Status {
  Status_Ok = 0,
  Status_InternalError = 1,
  Status_Denied = 2,
  UNRECOGNIZED = -1,
}

export interface CloudsaveRspV2_HttpReq {
  method: string;
  path: string;
  host: string;
  header: string;
}

export interface Req {
  requestId: number;
  cloudsaveUrlReq?: CloudsaveUrlReq;
  cloudsaveReq?: CloudsaveReq;
  cloudsaveReqV2?: CloudsaveReqV2;
}

export interface Rsp {
  requestId: number;
  cloudsaveUrlRsp?: CloudsaveUrlRsp;
  cloudsaveRsp?: CloudsaveRsp;
  cloudsaveRspV2?: CloudsaveRspV2;
}

export interface Upstream {
  request?: Req;
}

export interface Downstream {
  response?: Rsp;
}
