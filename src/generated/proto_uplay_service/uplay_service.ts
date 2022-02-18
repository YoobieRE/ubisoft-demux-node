/* eslint-disable */
export const protobufPackage = 'mg.protocol.uplay_service';

export interface StartInstall {
  uplayId: number;
}

export interface InstallingDependency {
  description: string;
  indexNumber: number;
  installersCount: number;
}

export interface DependencyInstalled {
  installerId: string;
  version: number;
  restartRequired: boolean;
}

export interface InstallCompleted {
  restartRequired: boolean;
}

export interface GearResult {
  result: string;
}

export interface Req {
  startInstall?: StartInstall;
  installingDependency?: InstallingDependency;
  dependencyInstalled?: DependencyInstalled;
  installCompleted?: InstallCompleted;
  gearResult?: GearResult;
}

export interface DependencyRestartRsp {
  isApproved: boolean;
}

export interface Rsp {
  restart?: DependencyRestartRsp;
}

export interface CancelInstallPush {}

export interface Push {
  cancelInstall?: CancelInstallPush;
}

export interface Upstream {
  req?: Req;
}

export interface Downstream {
  rsp?: Rsp;
  push?: Push;
}
