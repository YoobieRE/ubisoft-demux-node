/* eslint-disable */

export const protobufPackage = "mg.protocol.user_dat_file";

export interface UserInfo {
  username?: string | undefined;
  ubiAccountId?: string | undefined;
  email?: string | undefined;
  name?: string | undefined;
  passwordSalt?: Buffer | undefined;
  passwordHash?: Buffer | undefined;
  migrationEmailHash?: string | undefined;
  rememberMeTicket?: string | undefined;
  hashIterationsOffset?: number | undefined;
}

export interface LegacyVulnerableUnversionedCache {
  users: UserInfo[];
}

export interface StartupEntry {
  isRememberMe?: boolean | undefined;
  isRestartCredentials?: boolean | undefined;
  userIndex?: number | undefined;
}

export interface EnvironmentCache {
  users: UserInfo[];
  startupEntry?: StartupEntry | undefined;
}

export interface Cache {
  prod?: EnvironmentCache | undefined;
  uat?: EnvironmentCache | undefined;
  dev?: EnvironmentCache | undefined;
}
