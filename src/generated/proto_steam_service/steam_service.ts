/* eslint-disable */

export const protobufPackage = "mg.protocol.steam_service";

export enum CommunityVisibilityState {
  CommunityVisibilityState_Unsupported = 0,
  CommunityVisibilityState_Private = 1,
  CommunityVisibilityState_Public = 3,
  UNRECOGNIZED = -1,
}

export interface SteamUserInfo {
  steamId: string;
  personaname: string;
  avatarUrl: string;
  communityVisibilityState: CommunityVisibilityState;
}

export interface GetSteamFriendsReq {
  steamId: string;
}

export interface GetSteamFriendsRsp {
  steamFriends: SteamUserInfo[];
  success: boolean;
  publicAccountRequired: boolean;
}

export interface GetSteamUserInfoReq {
  steamId: string;
}

export interface GetSteamUserInfoRsp {
  steamUserInfo?: SteamUserInfo;
  success: boolean;
}

export interface Req {
  getSteamFriendsReq?: GetSteamFriendsReq;
  getSteamUserInfoReq?: GetSteamUserInfoReq;
}

export interface Rsp {
  getSteamFriendsRsp?: GetSteamFriendsRsp;
  getSteamUserInfoRsp?: GetSteamUserInfoRsp;
}

export interface Upstream {
  request?: Req;
}

export interface Downstream {
  response?: Rsp;
}
