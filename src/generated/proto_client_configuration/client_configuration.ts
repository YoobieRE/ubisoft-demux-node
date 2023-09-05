/* eslint-disable */
import type { GetPatchInfoReq as GetPatchInfoReq1, GetPatchInfoRsp as GetPatchInfoRsp2 } from "../proto_demux/demux";

export const protobufPackage = "mg.protocol.client_configuration";

export interface BuildVersion {
  versionNumber: number;
}

export interface GetStatisticsStatusReq {
  buildVersions: BuildVersion[];
}

export interface GetStatisticsStatusRsp {
  enabledBuildVersions: BuildVersion[];
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

export interface Req {
  requestId: number;
  getPatchInfoReq?: GetPatchInfoReq1 | undefined;
  getStatisticsStatusReq?: GetStatisticsStatusReq | undefined;
  getPatchInfoReqV2?: GetPatchInfoReq | undefined;
}

export interface Rsp {
  requestId: number;
  getPatchInfoRsp?: GetPatchInfoRsp2 | undefined;
  getStatisticsStatusRsp?: GetStatisticsStatusRsp | undefined;
  getPatchInfoRspV2?: GetPatchInfoRsp | undefined;
}

export interface Upstream {
  request?: Req | undefined;
}

export interface Downstream {
  response?: Rsp | undefined;
}
