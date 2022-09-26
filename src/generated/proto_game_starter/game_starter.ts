/* eslint-disable */

export const protobufPackage = "mg.protocol.game_starter";

export interface RichPresenceToken {
  key: string;
  value: string;
}

export interface DiscordRichPresence {
  appId: string;
  largeImage: string;
  smallImage: string;
  text: string;
}

export interface SteamProofOfPurchase {
  steamAppId: number;
  ticket: string;
}

export interface OculusInfo {
  appId: string;
  userId: string;
  oculusUserId: string;
  accessToken: string;
}

export interface NvidiaInfo {
  accessToken: string;
}

export interface WeGameInfo {
  railGameId: number;
}

export interface StartReq {
  launcherVersion: number;
  uplayId: number;
  steamGame: boolean;
  gameVersion: number;
  productId: number;
  simulationConfig: string;
  steamTicket: string;
  steamId: string;
  executablePath: string;
  executableArguments: string;
  timeStart: number;
  steamFreePackageId: number;
  steamRequiredProductId: number;
  steamProofOfPurchase: SteamProofOfPurchase[];
  oculusInfo?: OculusInfo;
  platform: StartReq_Platform;
  steamOwnerId: string;
  nvidiaInfo?: NvidiaInfo;
  weGameInfo?: WeGameInfo;
}

export enum StartReq_Platform {
  Platform_Uplay = 1,
  Platform_Steam = 2,
  Platform_Oculus = 3,
  Platform_Nvidia = 4,
  Platform_Switch = 5,
  Platform_WeGame = 6,
  UNRECOGNIZED = -1,
}

export interface HotkeyStateChangedReq {
  hotkeyType: number;
  isPressed: boolean;
}

export interface Hotkey {
  hotkeyType: number;
  keyCode: number;
  altState: boolean;
  shiftState: boolean;
  controlState: boolean;
}

export interface Hotkeys {
  hotkeys: Hotkey[];
}

export interface StartGrantedRsp {
  overlayEnabled: boolean;
  windowedMode: boolean;
  executablePath: string;
  workingDirectory: string;
  arguments: string;
  additionalArguments: string;
  uplayArguments: string;
  overlayInjectionMethod: StartGrantedRsp_OverlayInjectionMethod;
  hotkeys?: Hotkeys;
}

export enum StartGrantedRsp_OverlayInjectionMethod {
  OverlayInjectionMethod_None = 1,
  OverlayInjectionMethod_Default = 2,
  OverlayInjectionMethod_SDK = 3,
  UNRECOGNIZED = -1,
}

export interface StartDeniedRsp {
  reason: StartDeniedRsp_Reason;
}

export enum StartDeniedRsp_Reason {
  GamePatchRequired = 0,
  UNRECOGNIZED = -1,
}

export interface UpdateRequiredRsp {
}

export interface ConfirmationRsp {
}

export interface Req {
  startReq?: StartReq;
  hotkeyStateChangedReq?: HotkeyStateChangedReq;
}

export interface ReconnectPush {
}

export interface UserInteractionRequiredPush {
}

export interface SteamOverlayShowPush {
  url: string;
  steamAppId: number;
}

export interface UpdateHotKeysPush {
  hotkeys?: Hotkeys;
}

export interface Push {
  reconnectPush?: ReconnectPush;
  userInteractionRequiredPush?: UserInteractionRequiredPush;
  steamOverlayShowPush?: SteamOverlayShowPush;
  updateHotKeysPush?: UpdateHotKeysPush;
}

export interface Rsp {
  startGrantedRsp?: StartGrantedRsp;
  startDeniedRsp?: StartDeniedRsp;
  discordRichPresence?: DiscordRichPresence;
}

export interface Upstream {
  req?: Req;
}

export interface Downstream {
  push?: Push;
  rsp?: Rsp;
}
