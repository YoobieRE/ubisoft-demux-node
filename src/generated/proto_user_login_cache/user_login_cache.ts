/* eslint-disable */
export const protobufPackage = 'mg.protocol.user_login_cache';

export interface User {
  accountId: string;
  emailHash: string;
  rdTicket: string;
}

export interface UserLoginCache {
  version: number;
  users: User[];
}
