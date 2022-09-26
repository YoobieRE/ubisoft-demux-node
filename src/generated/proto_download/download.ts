/* eslint-disable */

export const protobufPackage = "mg.protocol.download";

export enum LicenseFormat {
  LicenseFormat_Text = 1,
  LicenseFormat_Html = 2,
  UNRECOGNIZED = -1,
}

export enum Platform {
  Platform_WindowsXP = 1,
  Platform_WindowsVista = 2,
  Platform_Windows7 = 3,
  Platform_Windows8 = 4,
  Platform_Windows10 = 5,
  Platform_Windows81 = 6,
  UNRECOGNIZED = -1,
}

export enum PlatformType {
  PlatformType_x86 = 1,
  PlatformType_x64 = 2,
  UNRECOGNIZED = -1,
}

export enum FirewallProfile {
  FirewallProfile_Domain = 1,
  FirewallProfile_Private = 2,
  FirewallProfile_Public = 3,
  FirewallProfile_All = 4,
  UNRECOGNIZED = -1,
}

export enum FirewallProtocol {
  FirewallProtocol_TCP = 1,
  FirewallProtocol_UDP = 2,
  UNRECOGNIZED = -1,
}

export enum CompressionMethod {
  CompressionMethod_Deflate = 1,
  CompressionMethod_Lzham = 2,
  CompressionMethod_Zstd = 3,
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

export interface InstallRun {
  exe: string;
  workingDir: string;
  arguments: string;
  description: string;
  identifier: string;
  version: number;
  platform: Platform;
  platformType: PlatformType;
  ignoreAllExitCodes: boolean;
  restartRequired: boolean;
}

export interface RegistryStringEntry {
  value: string;
  language: string;
}

export interface RegistryNumberEntry {
  value: number;
  language: string;
}

export interface InstallRegistry {
  key: string;
  type: InstallRegistry_ValueType;
  registryStringEntry: RegistryStringEntry[];
  registryNumberEntry: RegistryNumberEntry[];
}

export enum InstallRegistry_ValueType {
  ValueType_String = 0,
  ValueType_Number = 1,
  UNRECOGNIZED = -1,
}

export interface InstallGameExplorer {
  gdfPath: string;
  version: number;
}

export interface InstallFirewallRule {
  name: string;
  exe: string;
  profile: FirewallProfile;
  protocol: FirewallProtocol;
  ports: string;
  version: number;
}

export interface InstallCompatibility {
  exe: string;
  options: string;
  platform: Platform;
}

export interface UninstallRun {
  exe: string;
  workingDir: string;
  arguments: string;
  platform: Platform;
  platformType: PlatformType;
}

export interface UninstallRegistry {
  key: string;
}

export interface Slice {
  size: number;
  downloadSize: number;
  downloadSha1: Buffer;
  fileOffset: number;
}

export interface File {
  name: string;
  size: number;
  isDir: boolean;
  slices: Buffer[];
  version: number;
  paddedSize: number;
  sliceList: Slice[];
}

export interface Chunk {
  id: number;
  type: Chunk_ChunkType;
  files: File[];
  uplayId: number;
  language: string;
  disc: string;
  tags: string;
  uplayIds: number[];
}

export enum Chunk_ChunkType {
  ChunkType_Required = 0,
  ChunkType_Optional = 1,
  UNRECOGNIZED = -1,
}

export interface MetaDataChunk {
  uplayId: number;
  language: string;
  bytesOnDisk: number;
  paddedBytesOnDisk: number;
  uplayIds: number[];
}

export interface TextFileEntry {
  fileName: string;
  locale: string;
}

export interface TextFileList {
  rootPath: string;
  files: TextFileEntry[];
}

export interface Language {
  code: string;
  uplayIds: number[];
}

export interface SlicerConfig {
  slicerType: SlicerConfig_SlicerType;
  minSliceSizeBytes: number;
  expectedSliceSizeBytes: number;
  maxSliceSizeBytes: number;
  configVersion: number;
}

export enum SlicerConfig_SlicerType {
  Fsc = 1,
  FastCdc = 2,
  UNRECOGNIZED = -1,
}

export interface Manifest {
  licenses: License[];
  installRuns: InstallRun[];
  installRegistry: InstallRegistry[];
  uninstallRuns: UninstallRun[];
  uninstallRegistry: UninstallRegistry[];
  chunks: Chunk[];
  chunksVersion: number;
  sliceSizeDeprecated: number;
  installGameExplorer: InstallGameExplorer[];
  installFirewallRules: InstallFirewallRule[];
  installCompatibility: InstallCompatibility[];
  legacyInstaller: string;
  deprecatedLanguages: string[];
  isEncryptedDeprecated: boolean;
  paddedSliceSizeDeprecated: number;
  patchRequired: boolean;
  isCompressed: boolean;
  readmeFiles?: TextFileList;
  manualFiles?: TextFileList;
  gameVersion: string;
  compressionMethod: CompressionMethod;
  version: number;
  languages: Language[];
  slicerConfig?: SlicerConfig;
}

export interface ManifestLicenses {
  licenses: License[];
}

export interface ManifestMetaData {
  licenses: License[];
  bytesOnDisk: number;
  bytesToDownload: number;
  deprecatedLanguages: string[];
  chunksVersion: number;
  uplayIds: number[];
  chunks: MetaDataChunk[];
  paddedBytesOnDisk: number;
  languages: Language[];
}
