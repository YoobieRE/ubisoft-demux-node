/* eslint-disable */
import type {
  AutoPatching,
  Betas,
  BrandedInstaller,
  ConnectView,
  Conversations,
  Downloads,
  Epic,
  Hotkey,
  Language,
  Masters,
  Misc,
  ModelessPositions,
  Overlay,
  Position,
  RemotePlay,
  SharePlay,
  Spotlight,
  User,
} from "./common_settings";

export const protobufPackage = "mg.protocol.settings";

export interface Notifications {
  inGameEnabled: boolean;
  permanentInGameEnabled: boolean;
  inGameFriendOnlineEnabled: boolean;
  sysTrayEnabled: boolean;
  desktopFriendRequestEnabled: boolean;
  desktopFriendOnlineEnabled: boolean;
  desktopChatEnabled: boolean;
  desktopFriendGameEnabled: boolean;
  desktopGameInviteEnabled: boolean;
  desktopPartyInviteEnabled: boolean;
  desktopDownloadCompleteEnabled: boolean;
  desktopGamePatchAvailableEnabled: boolean;
  desktopPlayAvailableEnabled: boolean;
  desktopGroupInviteEnabled: boolean;
  desktopScreenshotsEnabled: boolean;
  desktopAchievementsEnabled: boolean;
  desktopClubActionsEnabled: boolean;
}

export interface SettingsModel {
  user?: User | undefined;
  overlay?: Overlay | undefined;
  language?: Language | undefined;
  misc?: Misc | undefined;
  position?: Position | undefined;
  notifications?: Notifications | undefined;
  masters?: Masters | undefined;
  hotkeysOverlayToggle?: Hotkey | undefined;
  hotkeysOverlayHide?: Hotkey | undefined;
  hotkeysCaptureScreenshot?: Hotkey | undefined;
  downloads?: Downloads | undefined;
  betas?: Betas | undefined;
  autoPatching?: AutoPatching | undefined;
  spotlight?: Spotlight | undefined;
  modelessPositions?: ModelessPositions | undefined;
  conversations?: Conversations | undefined;
  epic?: Epic | undefined;
  brandedInstaller?: BrandedInstaller | undefined;
  sharePlay?: SharePlay | undefined;
  connectView?: ConnectView | undefined;
  remotePlay?: RemotePlay | undefined;
}
