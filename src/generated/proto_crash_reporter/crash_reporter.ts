/* eslint-disable */

export const protobufPackage = "mg.protocol.crash_reporter";

export interface UploadDumpReq {
  dumpFilename: string;
  callstackHash: string;
}

export interface UploadDumpRsp {
  success: boolean;
}

export interface Req {
  uploadDump?: UploadDumpReq;
}

export interface Rsp {
  uploadDump?: UploadDumpRsp;
}

export interface Upstream {
  req?: Req;
}

export interface Downstream {
  rsp?: Rsp;
}
