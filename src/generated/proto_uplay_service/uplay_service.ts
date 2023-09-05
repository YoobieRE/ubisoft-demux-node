/* eslint-disable */

export const protobufPackage = "mg.protocol.uplay_service";

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
  startInstall?: StartInstall | undefined;
  installingDependency?: InstallingDependency | undefined;
  dependencyInstalled?: DependencyInstalled | undefined;
  installCompleted?: InstallCompleted | undefined;
  gearResult?: GearResult | undefined;
}

export interface DependencyRestartRsp {
  isApproved: boolean;
}

export interface Rsp {
  restart?: DependencyRestartRsp | undefined;
}

export interface CancelInstallPush {
}

export interface Push {
  cancelInstall?: CancelInstallPush | undefined;
}

export interface Upstream {
  req?: Req | undefined;
}

export interface Downstream {
  rsp?: Rsp | undefined;
  push?: Push | undefined;
}
