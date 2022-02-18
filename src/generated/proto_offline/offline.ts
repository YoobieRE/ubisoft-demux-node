/* eslint-disable */
export const protobufPackage = 'mg.protocol.offline';

export interface UserInfo {
  username: string;
  password: string;
  ubiAccountId: string;
  nickname: string;
  email: string;
  name: string;
  passwordHash: Buffer;
  passwordSalt: Buffer;
  emailHash: string;
}

export interface LastUserInfo {
  email: string;
  password: string;
}

export interface Users {
  users: UserInfo[];
  lastUser?: LastUserInfo;
  lastUserUat?: LastUserInfo;
}
