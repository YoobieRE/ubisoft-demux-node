/* eslint-disable */

export const protobufPackage = "mg.protocol.wegame_service";

export enum Status {
  Status_Unknown = 0,
  Status_Ok = 1,
  Status_EmptyResult = 2,
  Status_InternalError = 3,
  Status_Denied = 4,
  Status_TimedOut = 5,
  Status_ParameterError = 6,
  UNRECOGNIZED = -1,
}

export interface PlayerProfile {
  railId: string;
  nickName: string;
  avatarUrl: string;
}

export interface FriendProfile {
  railId: string;
  nickName: string;
  avatarUrl: string;
  friendTimestamp: number;
  commonId: string;
}

export interface GetUserRailIdReq {
  commonId: string;
}

export interface GetUserRailIdRsp {
  railId: string;
}

export interface GetPlayerProfileReq {
  commonId: string;
}

export interface GetPlayerProfileRsp {
  playerProfile?: PlayerProfile | undefined;
}

export interface GetPlayerProfilesReq {
  commonIds: string[];
}

export interface GetPlayerProfilesRsp {
  playerProfiles: GetPlayerProfilesRsp_PlayerProfileEntry[];
}

export interface GetPlayerProfilesRsp_PlayerProfileEntry {
  commonId: string;
  success: boolean;
  playerProfile?: PlayerProfile | undefined;
}

export interface GetFriendProfilesReq {
  commonId: string;
  count: number;
  startIndex: number;
}

export interface GetFriendProfilesRsp {
  friendProfiles: FriendProfile[];
}

export interface GetIngameItemInfoReq {
  wegameProductId: number;
  commonId: string;
  ingameItemPackageIds: number[];
}

export interface IngameItemInfo {
  ingameItemPackageId: number;
  packOriginalPrice: number;
  packDiscountPrice: number;
  currencyType: string;
  packConfiguration: string;
  productType: IngameItemInfo_ProductType;
}

export enum IngameItemInfo_ProductType {
  ProductType_Unknown = 0,
  ProductType_Normal = 1,
  ProductType_Bundle = 2,
  ProductType_Generator = 3,
  ProductType_InGameCoin = 4,
  UNRECOGNIZED = -1,
}

export interface GetIngameItemInfoRsp {
  ingameItems: IngameItemInfo[];
}

export interface GetIngameItemCheckoutUrlReq {
  railId: string;
  sessionTicket: string;
  wegameProductId: number;
  ingameItemPackageId: number;
  urlRedirect: string;
  zoneId: string;
}

export interface GetIngameItemCheckoutUrlRsp {
  wegameCheckoutUrl: string;
}

export interface Req {
  requestId: number;
  getUserRailIdReq?: GetUserRailIdReq | undefined;
  getPlayerProfileReq?: GetPlayerProfileReq | undefined;
  getFriendProfilesReq?: GetFriendProfilesReq | undefined;
  getIngameItemInfoReq?: GetIngameItemInfoReq | undefined;
  getIngameItemCheckoutUrlReq?: GetIngameItemCheckoutUrlReq | undefined;
  getPlayerProfilesReq?: GetPlayerProfilesReq | undefined;
}

export interface Rsp {
  requestId: number;
  status: Status;
  getUserRailIdRsp?: GetUserRailIdRsp | undefined;
  getPlayerProfileRsp?: GetPlayerProfileRsp | undefined;
  getFriendProfilesRsp?: GetFriendProfilesRsp | undefined;
  getIngameItemInfoRsp?: GetIngameItemInfoRsp | undefined;
  getIngameItemCheckoutUrlRsp?: GetIngameItemCheckoutUrlRsp | undefined;
  getPlayerProfilesRsp?: GetPlayerProfilesRsp | undefined;
}

export interface Upstream {
  request?: Req | undefined;
}

export interface Downstream {
  response?: Rsp | undefined;
}
