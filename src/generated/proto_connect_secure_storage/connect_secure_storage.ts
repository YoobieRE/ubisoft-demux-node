/* eslint-disable */

export const protobufPackage = "mg.protocol.connect_secure_storage";

export interface Entry {
  isPrivate: boolean;
  expirationTime: number;
  value: Buffer;
}

export interface SpaceIdBucket {
  elements: { [key: string]: Entry };
}

export interface SpaceIdBucket_ElementsEntry {
  key: string;
  value?: Entry | undefined;
}

export interface SecureStorage {
  data: { [key: string]: SpaceIdBucket };
}

export interface SecureStorage_DataEntry {
  key: string;
  value?: SpaceIdBucket | undefined;
}

export interface Cache {
  prod?: SecureStorage | undefined;
  uat?: SecureStorage | undefined;
  dev?: SecureStorage | undefined;
}
