/* eslint-disable */

export const protobufPackage = "mg.playtime";

export enum Result {
  Result_Success = 0,
  Result_Failure = 1,
  Result_TimeOut = 2,
  Result_ServerError = 3,
  Result_BadRequest = 4,
  UNRECOGNIZED = -1,
}

export interface UpdatePlaytimeReq {
  productIds: number[];
  secondsToAdd: number;
  isActivePlaySession: boolean;
  gameId: number;
}

export interface UpdatePlaytimeRsp {
  result: Result;
}

export interface GetPlaytimeReq {
  accountId: string;
  productId: number;
}

export interface GetPlaytimeRsp {
  result: Result;
  seconds: number;
  lastPlayed: string;
}

export interface GetFriendsPlaytimeReq {
  myFriends: string[];
  gameId: number;
}

export interface GetFriendsPlaytimeRsp {
  result: Result;
  myFriends: string[];
}

export interface Req {
  requestId: number;
  updatePlaytimeReq?: UpdatePlaytimeReq | undefined;
  getPlaytimeReq?: GetPlaytimeReq | undefined;
  getFriendsPlaytimeReq?: GetFriendsPlaytimeReq | undefined;
}

export interface Rsp {
  requestId: number;
  updatePlaytimeRsp?: UpdatePlaytimeRsp | undefined;
  getPlaytimeRsp?: GetPlaytimeRsp | undefined;
  getFriendsPlaytimeRsp?: GetFriendsPlaytimeRsp | undefined;
}

export interface Upstream {
  request?: Req | undefined;
}

export interface Downstream {
  response?: Rsp | undefined;
}
