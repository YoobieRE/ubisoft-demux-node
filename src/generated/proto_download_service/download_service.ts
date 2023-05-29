/* eslint-disable */

export const protobufPackage = "mg.protocol.download_service";

export interface UrlReq {
  urlRequests: UrlReq_Request[];
}

export interface UrlReq_Request {
  productId: number;
  relativeFilePath: string[];
}

export interface UrlRsp {
  urlResponses: UrlRsp_UrlResponse[];
  ttlSeconds: number;
}

export enum UrlRsp_Result {
  Result_Success = 0,
  Result_NotOwned = 1,
  UNRECOGNIZED = -1,
}

export interface UrlRsp_UrlResponse {
  result: UrlRsp_Result;
  downloadUrls: UrlRsp_DownloadUrls[];
}

export interface UrlRsp_DownloadUrls {
  urls: string[];
}

export interface InitializeReq {
  productId?: number;
  branchId?: number;
  expiration?: number;
  signature?: string;
  ownershipToken: string;
  networkId: string;
}

export interface InitializeRsp {
  ok: boolean;
}

export interface Req {
  requestId: number;
  initializeReq?: InitializeReq;
  urlReq?: UrlReq;
  urlReqCovid?: UrlReq;
}

export interface Rsp {
  requestId: number;
  initializeRsp?: InitializeRsp;
  urlRsp?: UrlRsp;
}

export interface Upstream {
  request?: Req;
}

export interface Downstream {
  response?: Rsp;
}
