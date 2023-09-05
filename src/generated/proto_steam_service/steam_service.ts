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
  steamUserInfo?: SteamUserInfo | undefined;
  success: boolean;
}

export interface Req {
  getSteamFriendsReq?: GetSteamFriendsReq | undefined;
  getSteamUserInfoReq?: GetSteamUserInfoReq | undefined;
}

export interface Rsp {
  getSteamFriendsRsp?: GetSteamFriendsRsp | undefined;
  getSteamUserInfoRsp?: GetSteamUserInfoRsp | undefined;
}

export interface Upstream {
  request?: Req | undefined;
}

export interface Downstream {
  response?: Rsp | undefined;
}
