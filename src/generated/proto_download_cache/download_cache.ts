/* eslint-disable */
export const protobufPackage = 'mg.protocol.download_cache';

export interface Download {
  productId: number;
  manifestId: string;
  downloadType: Download_DownloadType;
  downloadState: Download_DownloadState;
  additionalDownloadIndex: number;
  additionalDownloadFilename: string;
  downloadInitiator: Download_DownloadInitiator;
  brandedInstallerId: string;
}

export enum Download_DownloadType {
  DownloadType_Edison = 0,
  DownloadType_EdisonThirdParty = 1,
  DownloadType_Legacy = 2,
  DownloadType_Additional = 3,
  DownloadType_Reward = 4,
  DownloadType_LegacyAddOn = 5,
  UNRECOGNIZED = -1,
}

export enum Download_DownloadState {
  DownloadState_Init = 0,
  DownloadState_ResumeFiles = 1,
  DownloadState_InProgress = 2,
  DownloadState_Paused = 3,
  DownloadState_NetworkError = 4,
  DownloadState_Failure = 5,
  DownloadState_Cancelled = 6,
  DownloadState_Completed = 7,
  DownloadStatus_AllocatingDiskSpace = 8,
  UNRECOGNIZED = -1,
}

export enum Download_DownloadInitiator {
  Unknown = 0,
  BrandedInstaller = 1,
  LaunchProtocol = 2,
  InstallProtocol = 3,
  InstallProtocolRetail = 4,
  UNRECOGNIZED = -1,
}

export interface DownloadCache {
  isPaused: boolean;
  download: Download[];
}
