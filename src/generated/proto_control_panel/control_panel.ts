/* eslint-disable */

export const protobufPackage = "mg.protocol.control_panel";

export interface AccountCache {
  email: string;
  password: string;
  comment: string;
  environment: AccountCache_Environment;
}

export enum AccountCache_Environment {
  Environment_DEV = 0,
  Environment_UAT = 1,
  Environment_PROD = 2,
  UNRECOGNIZED = -1,
}

export interface AccountsCache {
  accounts: AccountCache[];
}

export interface ClientCache {
  name: string;
  path: string;
  param: string;
}

export interface ClientsCache {
  clients: ClientCache[];
}

export interface JsonMessage {
  name: string;
  message: string;
}

export interface BinaryProto {
  friends: Buffer;
  ownership: Buffer;
  group: Buffer;
}

export interface CmdSetSdkMonitoringEnabled {
  enabled: boolean;
}

export interface InitializeReq {
  id: string;
}

export interface InitializeRsp {
  success: boolean;
}

export interface Req {
  jsonMessage?: JsonMessage;
  binaryProto?: BinaryProto;
  initializeReq?: InitializeReq;
}

export interface Rsp {
  jsonMessage?: JsonMessage;
  intializeRsp?: InitializeRsp;
}

export interface Push {
  jsonMessage?: JsonMessage;
}

export interface Upstream {
  req?: Req;
}

export interface Downstream {
  push?: Push;
  rsp?: Rsp;
}
