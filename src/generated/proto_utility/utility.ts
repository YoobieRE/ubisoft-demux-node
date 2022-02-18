/* eslint-disable */
export const protobufPackage = 'mg.protocol.utility';

export interface GeoIpReq {}

export interface GeoIpRsp {
  countryCode: string;
  continentCode: string;
}

export interface Req {
  geoipReq?: GeoIpReq;
}

export interface Rsp {
  geoipRsp?: GeoIpRsp;
}

export interface Upstream {
  request?: Req;
}

export interface Downstream {
  response?: Rsp;
}
