/* eslint-disable */
export const protobufPackage = 'mg.playtime';

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
  updatePlaytimeReq?: UpdatePlaytimeReq;
  getPlaytimeReq?: GetPlaytimeReq;
  getFriendsPlaytimeReq?: GetFriendsPlaytimeReq;
}

export interface Rsp {
  requestId: number;
  updatePlaytimeRsp?: UpdatePlaytimeRsp;
  getPlaytimeRsp?: GetPlaytimeRsp;
  getFriendsPlaytimeRsp?: GetFriendsPlaytimeRsp;
}

export interface Upstream {
  request?: Req;
}

export interface Downstream {
  response?: Rsp;
}
