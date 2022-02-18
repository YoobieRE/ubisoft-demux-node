/* eslint-disable */
export const protobufPackage = 'mg.protocol.remember_device_file';

export interface User {
  AccountId?: { $case: 'accountId'; accountId: string };
  EmailHash?: { $case: 'emailHash'; emailHash: string };
  RdTicket?: { $case: 'rdTicket'; rdTicket: string };
}

export interface UserLoginCache {
  users: User[];
  Version?: { $case: 'version'; version: number };
}
