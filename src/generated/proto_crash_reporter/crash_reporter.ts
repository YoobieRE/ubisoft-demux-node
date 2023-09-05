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
  uploadDump?: UploadDumpReq | undefined;
}

export interface Rsp {
  uploadDump?: UploadDumpRsp | undefined;
}

export interface Upstream {
  req?: Req | undefined;
}

export interface Downstream {
  rsp?: Rsp | undefined;
}
