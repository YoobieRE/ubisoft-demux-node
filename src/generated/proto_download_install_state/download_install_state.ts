/* eslint-disable */

export const protobufPackage = "mg.protocol.download_install_state";

export interface License {
  identifier: string;
  version: number;
}

export interface Installer {
  identifier: string;
  manifestVersion: number;
  installedVersion: number;
}

export interface RegistryEntry {
  key: string;
  language: string;
  stringValue: string;
  numberValue: number;
}

export interface Chunk {
  chunkId: number;
  isRequired: boolean;
  isDownloaded: boolean;
  language: string;
  uplayId: number;
  tags: string;
  uplayIds: number[];
}

export interface Shortcut {
  name: string;
}

export interface TextFileEntry {
  fileName: string;
  locale: string;
}

export interface TextFileList {
  rootPath: string;
  files: TextFileEntry[];
}

export interface DownloadInstallState {
  manifestSha1: string;
  downloadingSha1: string;
  version: number;
  selectedLanguage: string;
  licenses: License[];
  installers: Installer[];
  chunks: Chunk[];
  shortcutName: string;
  shortcuts: Shortcut[];
  registryEntries: RegistryEntry[];
  languages: string[];
  downloadingLanguages: string[];
  patchRequired: boolean;
  bytesDownloadedOnPatchStart: number;
  requiredBytesDownloadedOnPatchStart: number;
  gameName: string;
  readmeFiles?: TextFileList;
  manualFiles?: TextFileList;
  gameVersion: string;
  installedLanguages: string[];
  installedAddons: number[];
  uplayId: number;
  invalidateGameTokenRequired: boolean;
  epicRunInstallation: boolean;
  forceCheckLicensesOnNextLaunch: boolean;
  installDate: number;
}
