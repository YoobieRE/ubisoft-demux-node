/* eslint-disable */
export const protobufPackage = 'mg.protocol.remember_device_file';

export interface User {
  accountId: string | undefined;
  emailHash: string | undefined;
  rdTicket: string | undefined;
}

export interface UserLoginCache {
  users: User[];
  version: number | undefined;
}
