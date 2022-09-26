/* eslint-disable */

export const protobufPackage = "mg.protocol.user_settings";

export enum GameLibraryStyle {
  GameLibraryStyle_Thumbs = 0,
  GameLibraryStyle_List = 1,
  UNRECOGNIZED = -1,
}

export enum GameLibraryThumbSize {
  GameLibraryThumbSize_Small = 0,
  GameLibraryThumbSize_Medium = 1,
  GameLibraryThumbSize_Large = 2,
  UNRECOGNIZED = -1,
}

export enum GameLibraryListStyle {
  GameLibraryListStyle_Wide = 0,
  GameLibraryListStyle_Narrow = 1,
  UNRECOGNIZED = -1,
}

export enum SecurityPromptState {
  SecurityPromptState_None = 0,
  SecurityPromptState_2FA = 1,
  SecurityPromptState_EmailVerification = 2,
  SecurityPromptState_PhoneCollection = 3,
  UNRECOGNIZED = -1,
}

export interface FavouriteGame {
  productId: number;
}

export interface HiddenGame {
  productId: number;
}

export interface FavouriteGames {
  games: FavouriteGame[];
}

export interface HiddenGames {
  games: HiddenGame[];
}

export interface PlayedGame {
  productId: number;
  exeIndex: number;
  timestamp: number;
  playTime: number;
}

export interface PlayedGames {
  games: PlayedGame[];
}

export interface ProductBranch {
  productId: number;
  branchId: number;
  useDefault: boolean;
  password: string;
}

export interface ProductBranches {
  branches: ProductBranch[];
}

export interface KnownBranch {
  productId: number;
  branchId: number;
  branchName: string;
  password: string;
}

export interface KnownBranches {
  branches: KnownBranch[];
}

export interface AutoPatchBlacklistProduct {
  productId: number;
}

export interface AutoPatching {
  products: AutoPatchBlacklistProduct[];
}

export interface GameLibrary {
  style: GameLibraryStyle;
  thumbSize: GameLibraryThumbSize;
  listStyle: GameLibraryListStyle;
  showFavoriteGames: boolean;
  showOwnedGames: boolean;
  showInstalledGames: boolean;
  showFreeGames: boolean;
  showOtherGames: boolean;
}

export interface GameStartArguments {
  gameid: number;
  arguments: string;
}

export interface GamesStartArguments {
  gameStartArguments: GameStartArguments[];
}

export interface News {
  displayMode: string;
  filter: string[];
}

export interface PromoTab {
  promoTabId: number;
}

export interface SeenPromoTabs {
  seenPromoTabs: PromoTab[];
}

export interface SpotlightShownTimestamps {
  spotlightShownTimestamp: number[];
}

export interface UserSettings {
  favouriteGames?: FavouriteGames;
  hiddenGames?: HiddenGames;
  lastPlayedGames?: PlayedGames;
  productBranches?: ProductBranches;
  knownBranches?: KnownBranches;
  dontUploadCrashReports: boolean;
  autoPatching?: AutoPatching;
  activityStatus: string;
  remindMeOfSteamLinking: boolean;
  gameLibrary?: GameLibrary;
  gamesStartArguments?: GamesStartArguments;
  expiredSecurityPromptTimestamp: number;
  lastDismissedPromoBubbleId: string;
  news?: News;
  lastSecurityPromptState: SecurityPromptState;
  lastEmailVerificPromptTimestamp: number;
  lastdissmisseduplayplusbubbleid: string;
  isexpirationbannerdisabled: boolean;
  seenPromoTabs?: SeenPromoTabs;
  isunavailablebannerdisabled: boolean;
  spotlightShownTimestamps?: SpotlightShownTimestamps;
}
