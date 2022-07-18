/* eslint-disable */
export const protobufPackage = 'mg.protocol.settings';

export enum CloseBehavior {
  CloseBehavior_Undefined = 0,
  CloseBehavior_Close = 1,
  CloseBehavior_Minimize = 2,
  UNRECOGNIZED = -1,
}

export enum LandingPage {
  LandingPageNews = 0,
  LandingPageGames = 1,
  LandingPageLastPlayedGame = 2,
  LandingPageUplayPlus = 3,
  UNRECOGNIZED = -1,
}

export interface User {
  syncsavegames: boolean;
  offline: boolean;
  closebehavior: CloseBehavior;
  landingpage: LandingPage;
  startOnWindowsStart: boolean;
  nonFriendGameInviteEnabled: boolean;
  landingpageSetByUser: boolean;
}

export interface Overlay {
  enabled: boolean;
  forceunhookgame: boolean;
  fpsEnabled: boolean;
  warningEnabled: boolean;
}

export interface Language {
  code: string;
}

export interface Misc {
  installerCachePath: string;
  screenshotRootPath: string;
  enableScreenshotsOnAchievements: boolean;
  gameInstallationPath: string;
  enableAutoWallPosts: boolean;
  saveScreenshotUncompressedCopy: boolean;
}

export interface Position {
  left: number;
  top: number;
  width: number;
  height: number;
  maximized: boolean;
}

export interface ModelessPositions {
  friendsWindow?: Position;
  conversationsWindow?: Position;
}

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

export interface Masters {
  username: string;
  password: string;
}

export interface Hotkey {
  keyCode: number;
  altState: boolean;
  shiftState: boolean;
  controlState: boolean;
}

export interface Downloads {
  limit: number;
  limitEnabled: boolean;
  pauseOnGameLaunch: boolean;
}

export interface Betas {
  optIn: boolean;
}

export interface AutoPatching {
  enabled: boolean;
}

export interface Spotlight {
  enabled: boolean;
}

export interface Conversations {
  taskbarTabsEnabled: boolean;
}

export interface Epic {
  exchangeCode: string;
}

export interface BrandedInstaller {
  pendingProtocol: string;
}

export interface SharePlay {
  bitrate: number;
  displayOnboarding: boolean;
  mouseAndKeyboardAccessAllowed: boolean;
  gamepadAccessAllowed: boolean;
  displayWizardTour: boolean;
  lastTimeFeedBackWindowDisplayed: number;
  nbBuyGameRefused: number;
  nbFeedbackUnfilled: number;
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
}
