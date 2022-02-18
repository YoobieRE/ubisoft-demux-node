/* eslint-disable */
export const protobufPackage = 'mg.protocol.user_dat_file';

export interface UserInfo {
  Username?: { $case: 'username'; username: string };
  UbiAccountId?: { $case: 'ubiAccountId'; ubiAccountId: string };
  Email?: { $case: 'email'; email: string };
  Name?: { $case: 'name'; name: string };
  PasswordSalt?: { $case: 'passwordSalt'; passwordSalt: Buffer };
  PasswordHash?: { $case: 'passwordHash'; passwordHash: Buffer };
  MigrationEmailHash?: { $case: 'migrationEmailHash'; migrationEmailHash: string };
  RememberMeTicket?: { $case: 'rememberMeTicket'; rememberMeTicket: string };
  HashIterationsOffset?: { $case: 'hashIterationsOffset'; hashIterationsOffset: number };
}

export interface LegacyVulnerableUnversionedCache {
  users: UserInfo[];
}

export interface StartupEntry {
  IsRememberMe?: { $case: 'isRememberMe'; isRememberMe: boolean };
  IsRestartCredentials?: { $case: 'isRestartCredentials'; isRestartCredentials: boolean };
  UserIndex?: { $case: 'userIndex'; userIndex: number };
}

export interface EnvironmentCache {
  users: UserInfo[];
  StartupEntry?: { $case: 'startupEntry'; startupEntry: StartupEntry };
}

export interface Cache {
  Prod?: { $case: 'prod'; prod: EnvironmentCache };
  Uat?: { $case: 'uat'; uat: EnvironmentCache };
  Dev?: { $case: 'dev'; dev: EnvironmentCache };
}
