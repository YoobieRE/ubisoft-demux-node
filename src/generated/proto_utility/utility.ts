/* eslint-disable */

export const protobufPackage = "mg.protocol.utility";

export interface GeoIpReq {
}

export interface GeoIpRsp {
  countryCode: string;
  continentCode: string;
}

export interface Req {
  geoipReq?: GeoIpReq | undefined;
}

export interface Rsp {
  geoipRsp?: GeoIpRsp | undefined;
}

export interface Upstream {
  request?: Req | undefined;
}

export interface Downstream {
  response?: Rsp | undefined;
}
