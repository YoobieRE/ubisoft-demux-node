/* eslint-disable */
export const protobufPackage = 'mg.protocol.installation_backup';

export enum LicenseFormat {
  LicenseFormat_Text = 1,
  LicenseFormat_Html = 2,
  UNRECOGNIZED = -1,
}

export interface LicenseLocale {
  language: string;
  sha1: Buffer;
  text: string;
  name: string;
}

export interface License {
  identifier: string;
  version: number;
  locales: LicenseLocale[];
  format: LicenseFormat;
}

export interface Slice {
  sha1: Buffer;
  size: number;
  offset: number;
}

export interface Archive {
  filename: string;
  size: number;
  slices: Slice[];
}

export interface Disc {
  number: number;
  label: string;
  archives: Archive[];
}

export interface TextFile {
  language: string;
  fileName: string;
}

export interface Autorun {
  gameTitle: string;
  readmeFiles: TextFile[];
  manualFiles: TextFile[];
}

export interface InstallationBackup {
  version: number;
  productId: number;
  discs: Disc[];
  licenses: License[];
  manifestSha1: string;
  environment: string;
  autorun?: Autorun;
  languages: string[];
  sha1: Buffer;
  productPackUplayIds: number[];
}
