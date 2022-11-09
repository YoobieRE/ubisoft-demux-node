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
  user?: User;
  overlay?: Overlay;
  language?: Language;
  misc?: Misc;
  position?: Position;
  notifications?: Notifications;
  masters?: Masters;
  hotkeysOverlayToggle?: Hotkey;
  hotkeysOverlayHide?: Hotkey;
  hotkeysCaptureScreenshot?: Hotkey;
  downloads?: Downloads;
  betas?: Betas;
  autoPatching?: AutoPatching;
  spotlight?: Spotlight;
  modelessPositions?: ModelessPositions;
  conversations?: Conversations;
  epic?: Epic;
  brandedInstaller?: BrandedInstaller;
  sharePlay?: SharePlay;
  connectView?: ConnectView;
  remotePlay?: RemotePlay;
}
