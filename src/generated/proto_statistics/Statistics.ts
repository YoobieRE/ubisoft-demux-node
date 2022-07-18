/* eslint-disable */
export const protobufPackage = 'mg.protocol.statistics';

export interface GameStartTypeData {
  machineId: string;
  buildVersion: string;
  gameVersion: string;
}

export interface GameLocalizationTypeData {
  areSubtitlesEnabled: boolean;
  gameLanguage: string;
  platformLocale: string;
  subtitlesLanguage: string;
}

export interface ContextStartTypeData {
  contextType: string;
  contextName: string;
  contextId: number;
}

export interface ContextStopTypeData {
  contextType: string;
  contextName: string;
  contextDuration: number;
  contextId: number;
}

export interface GameEndObjectData {
  gameLength: number;
  nbScreenshots: number;
  nbUnitsWon: number;
  nbAchievmentsUnlocked: number;
  productId: number;
  activationIds: string;
  nbParties: number;
  brand: number;
  openOverlayCount: number;
  generatedFromCache: boolean;
  shopVisible: boolean;
}

export interface DLErrorObjectData {
  dlSessionId: string;
  productId: number;
  errorSource: string;
  context: string;
  errorCode: string;
  nbOccurences: number;
  brand: number;
  category: string;
}

export interface DecompressSliceErrorObjectData {
  productId: number;
  manifestSHA1: string;
  filePath: string;
  sliceOffsetInFile: number;
  sliceSize: number;
  compressionMethod: DecompressSliceErrorObjectData_CompressionMethod;
  errorCode: number;
  source: DecompressSliceErrorObjectData_Source;
  sliceFilename: string;
}

export enum DecompressSliceErrorObjectData_CompressionMethod {
  NONE = 1,
  ZIP = 2,
  LZHAM = 3,
  ZSTD = 4,
  UNRECOGNIZED = -1,
}

export enum DecompressSliceErrorObjectData_Source {
  RETAIL = 1,
  DOWNLOAD = 2,
  UNRECOGNIZED = -1,
}

export interface FollowLinkObjectData {
  sender: string;
  linkUrl: string;
  target: string;
  metaTag: string;
  visualAsset: string;
  linkResult: string;
}

export interface GameLaunchObjectData {
  productId: number;
  launchMethod: string;
  gameStarterTime: number;
  inputSource: string;
  steamAccount: string;
  brand: number;
  activationIds: string;
  shopVisible: boolean;
  productActivated: boolean;
  machineGuid: string;
  launchPartner: string;
}

export interface AppQuitObjectData {
  quitReason: AppQuitObjectData_QuitReason;
  secondsSinceStart: number;
  demuxConnectionFailureCount: number;
  discardedEventsCount: number;
  generatedFromCache: boolean;
  shopVisible: boolean;
}

export enum AppQuitObjectData_QuitReason {
  USER = 1,
  LOGOUT = 2,
  FAILEDRELOGIN = 3,
  LOGOUTPUSH = 4,
  PATCH = 5,
  GOOFFLINE = 6,
  GOONLINE = 7,
  USERBANNED = 8,
  RESTART = 9,
  CLIENTOUTDATED = 10,
  UNKNOWN = 11,
  UNRECOGNIZED = -1,
}

export interface GameCloudSaveSyncObjectData {
  productId: number;
  machineId: string;
  when: GameCloudSaveSyncObjectData_When;
  direction: GameCloudSaveSyncObjectData_Direction;
  conflict: GameCloudSaveSyncObjectData_Conflict;
  error: GameCloudSaveSyncObjectData_Error;
  resolution: GameCloudSaveSyncObjectData_Resolution;
  bytesSent: number;
  brand: number;
}

export enum GameCloudSaveSyncObjectData_When {
  START = 1,
  END = 2,
  UNRECOGNIZED = -1,
}

export enum GameCloudSaveSyncObjectData_Direction {
  UPLOAD = 1,
  DOWNLOAD = 2,
  UNRECOGNIZED = -1,
}

export enum GameCloudSaveSyncObjectData_Conflict {
  MISMATCH = 1,
  MIGRATIONCONFLICT = 2,
  CLOUDSTORAGECONFLICT = 3,
  UNRECOGNIZED = -1,
}

export enum GameCloudSaveSyncObjectData_Error {
  GETCONSISTENTSERVERFAILED = 1,
  SETCONSISTENTSERVERFAILED = 2,
  PACKFILESFAILED = 3,
  GETUPLOADURLFAILED = 4,
  UPLOADFAILED = 5,
  MIGRATIONFAILED = 6,
  DOWNLOADFAILED = 7,
  UNRECOGNIZED = -1,
}

export enum GameCloudSaveSyncObjectData_Resolution {
  CLOUD = 1,
  LOCAL = 2,
  UNRECOGNIZED = -1,
}

export interface SettingChangedObjectData {
  settingName: string;
  oldValue: string;
  newValue: string;
  sender: string;
}

export interface ShopAddToCartObjectData {
  productId: number;
  gameId: number;
  titleId: number;
  action: string;
}

export interface UINavObjectData {
  id: string;
  index: string;
  timeOnFocus: number;
  timeOnBlur: number;
  generatedFromCache: boolean;
  shopVisible: boolean;
}

export interface BattlePassActionObjectData {
  action: string;
  details: string;
  endstatus: string;
  gameId: number;
  brandId: number;
  viewSource: string;
}

export interface AppStartObjectData {
  launchMethod: string;
  machineId: string;
  fileVersion: string;
  patchTime: number;
  loginTime: number;
  configTime: number;
  optInPatch: string;
  offlineStart: boolean;
  authType: number;
  shopVisible: boolean;
  verifiedEmail: boolean;
  twoFAtype: string;
  trustedDevice: boolean;
  verifiedPhone: boolean;
  clientLanguage: string;
}

export enum AppStartObjectData_AuthType {
  NORMAL = 0,
  STEAM = 1,
  GOOGLE_AUTHENTICATOR = 2,
  OCULUS = 3,
  NVIDIA = 4,
  UBITUS = 5,
  UBISOFT_AUTHENTICATOR = 6,
  UNRECOGNIZED = -1,
}

export interface DownloadObjectData {
  dlSessionId: string;
  contract: string;
  contentType: string;
  isResuming: boolean;
  productId: number;
  patchDL: number;
  dlSize: number;
  overheadWaste: number;
  overheadMetadata: number;
  overheadTotal: number;
  totalExpectedSize: number;
  totalDLSize: number;
  milestoneDLTime: number;
  totalDLTime: number;
  avgDLSpeed: number;
  maxDLSpeed: number;
  nbTimesPaused: number;
  endStatus: string;
  failReason: string;
  userSpeedLimit: number;
  activationIds: string;
  brand: number;
  initiatedFrom: string;
  installerId: string;
}

export interface HardwareScoreData {
  cpuScore: number;
  gpuScore: number;
  cpuName: string;
  gpuName: string;
  ramSize: number;
  gpuScoreConfidenceLevel: number;
}

export interface GPUInfo {
  name: string;
  vendorId: number;
  deviceId: number;
  vram: number;
  dxVersion: string;
  driverVersion: string;
}

export interface SoundDeviceInfo {
  name: string;
  vendorId: number;
  deviceId: number;
  driverVersion: string;
}

export interface PhysicalDrive {
  model: string;
  deviceId: string;
  size: number;
  name: string;
}

export interface USBDevice {
  name: string;
  vendorId: number;
  deviceId: number;
}

export interface MachineConfObjectData {
  machineGuid: string;
  ramSize: number;
  ramType: string;
  cpuCount: number;
  cpuCores: number;
  cpuThreads: number;
  cpuName: string;
  cpuHSI: string;
  cpuDetectedSpeed: number;
  gpuCount: number;
  gpuName: string;
  gpuVendor: string;
  gpuDXVersion: string;
  gpuVram: number;
  monitor1: string;
  monitor2: string;
  hddCount: number;
  hddTotSpace: number;
  hddFreeSpace: number;
  osName: string;
  osBits: number;
  osRegion: string;
  soundCard: string;
  netBandwidth: number;
  cpuScore: number;
  gpuScore: number;
  microphone: string;
  gamepad: string;
  detectionTime: number;
  osVersion: string;
  uuid: string;
  countryCode: string;
  cpuCacheL1: number;
  cpuCacheL2: number;
  cpuCacheL3: number;
  cpuDescription: string;
  netAdapterType: string;
  netVendorId: number;
  netDeviceId: number;
  motherboardChipset: string;
  firewall: string;
  gpu: GPUInfo[];
  soundDevice: SoundDeviceInfo[];
  physicalDrive: PhysicalDrive[];
  usbDevice: USBDevice[];
}

export interface HttpServiceRequestObjectData {
  url: string;
  name: string;
  responseCode: number;
  connectTime: number;
  requestTime: number;
  totTime: number;
}

export interface ImportSteamFriendsObjectData {
  totSteamFriends: number;
  friendsImported: number;
  steamId: string;
}

export interface ActivateProductObjectData {
  packageId: number;
  gameId: number;
  brandId: number;
  failReason: string;
  nbKeyAttempts: number;
  banned: boolean;
  activationTime: number;
  initiatedFrom: string;
  currentGroup: string;
  previousGroup: string;
  nbNormalGames: number;
  nbSteamGames: number;
  productType: string;
}

export interface PartyObjectData {
  partyId: number;
  joinedParty: number;
  leftParty: number;
  isInitiator: boolean;
  declinedParty: boolean;
  productId: number;
  activationIds: string;
  brandId: number;
  maxPartyMembers: number;
}

export interface AccountCreationObjectData {
  endStatus: AccountCreationObjectData_EndStatus;
  failReason: AccountCreationObjectData_FailReason;
  errorCodes: string;
  initiatedFrom: string;
  installerId: string;
}

export enum AccountCreationObjectData_EndStatus {
  SUCCESS = 1,
  FAIL = 2,
  CANCEL = 3,
  UNRECOGNIZED = -1,
}

export enum AccountCreationObjectData_FailReason {
  GETPOLICIESFAIL = 1,
  VALIDATINGFAIL = 2,
  CREATEACCOUNTFAIL = 3,
  UNRECOGNIZED = -1,
}

export interface FriendActionObjectData {
  action: string;
  friendId: string;
  productId: number;
  brandId: number;
  inputSource: string;
}

export interface FriendSuggestionActionObjectData {
  action: string;
  friendId: string;
  suggestionType: string;
  inputSource: string;
  brandId: number;
}

export interface FriendSuggestionImpressionObjectData {
  friendId: string;
  suggestionType: string;
  inputSource: string;
  brandId: number;
  sugRank: number;
}

export interface RedeemRewardObjectData {
  unitCost: number;
  rewardId: string;
  sourcePage: string;
  productId: number;
  activationIds: string;
  brandId: number;
}

export interface StreamingSessionObjectData {
  gameVolume: number;
  micVolume: number;
  paused: number;
  startTime: number;
  endTime: number;
  copyUrl: number;
  startMethod: string;
  maxNbViewers: number;
  gameId: number;
  brandId: number;
  streamingTime: number;
  serviceName: string;
}

export interface AccountLinkingObjectData {
  thirdPartyName: string;
  success: number;
  thirdPartyId: string;
}

export interface ChatSessionObjectData {
  conversationId: string;
  msgSent: number;
  msgReceived: number;
  type: number;
}

export interface ChallengeActionObjectData {
  productId: number;
  activationIds: string;
  brandId: number;
  action: string;
  poolId: string;
  challengeId: string;
  expired: boolean;
}

export interface NewsClickObjectData {
  ignId: string;
  viewName: string;
  displayType: string;
  brandId: number;
  productId: number;
  layout: string;
}

export interface NewsOpenObjectData {
  ignId: string;
  sender: string;
  senderId: string;
}

export interface NewsImpressionObjectData {
  ignId: string;
  viewName: string;
  displayType: string;
  brandId: number;
  productId: number;
}

export interface AdImpressionObjectData {
  linkUrl: string;
  metaTag: string;
}

export interface PromoTabInteractionObjectData {
  tabName: string;
  interactionType: string;
  target: string;
  sectionName: string;
  brandId: number;
  url: string;
  clientLanguage: string;
  ownScenario: string;
}

export interface NewsInteractionObjectData {
  ignId: string;
  interactionType: string;
  target: string;
  viewName: string;
  brandId: number;
  productId: number;
  url: string;
  layout: string;
  betaCode: string;
  betaPhaseId: number;
}

export interface TicketRenewalFailureObjectData {
  failRenewalCount: number;
  resultHttpCode: number;
  isRememberMeTicket: boolean;
}

export interface GroupActionObjectData {
  action: string;
  groupId: string;
  inviteeId: string;
  groupName: string;
  groupPreviousName: string;
  productId: number;
  brandId: number;
  inputSource: string;
}

export interface IngameShopImpressionObjectData {
  assetUrl: string;
  viewName: string;
  gameId: number;
  brandId: number;
  shopId: string;
  marketId: string;
  countryId: string;
  productId: number;
  shopProductId: string;
}

export interface IngameShopActionObjectData {
  gameId: number;
  brandId: number;
  shopId: string;
  marketId: string;
  countryId: string;
  productId: number;
  shopProductId: string;
  pspId: string;
  promoId: string;
  filterId: number;
  itemCategory: string;
  result: boolean;
  action: string;
  source: string;
}

export interface DiagnosticObjectData {
  customData: string;
}

export interface EmailVerificationObjectData {
  action: string;
  inputSource: string;
}

export interface TwoFAActivationObjectData {
  action: string;
  inputSource: string;
}

export interface PhoneSecurityObjectData {
  action: string;
  inputSource: string;
}

export interface SendSmsTrackEventActionObjectData {
  action: string;
  inputSource: string;
}

export interface PopUpDisplayEventObjectData {
  popUpName: string;
  viewName: string;
  finalState: string;
  contentId: string;
}

export interface TrustedDeviceActionData {
  action: string;
  machineId: string;
  defaultFriendlyName: boolean;
}

export interface SharePlayHostSessionStreamingStartData {
  width: number;
  height: number;
  bitrate: number;
  isAudioEnabled: boolean;
}

export interface SharePlayHostSessionStreamingStopData {
  reason: string;
}

export interface SharePlayOnboardingData {
  sourceTrackingData: string;
  reason: string;
  step: number;
}

export interface SharePlayHostPageData {
  sourceTrackingData: string;
}

export interface SharePlayGuestInvitationData {
  invitationSource: string;
  invitationStatus: string;
  invitationSentTime: string;
}

export interface SharePlayHostInvitationData {
  invitationTarget: string;
  invitationStatus: string;
  invitationId: string;
}

export interface SharePlayHostErrorData {
  errorType: string;
  errorName: string;
  errorSource: string;
  invitationId: string;
  hostStreamId: string;
  guestStreamId: string;
}

export interface SharePlayHostSettingsData {
  bitrate: number;
  mouseAndKeyboardAccessAllowed: boolean;
  gamepadAccessAllowed: boolean;
  sourceTrackingData: string;
}

export interface StreamingHostStartSessionData {
  hostPeerId: string;
  side: string;
  spaceIdGame: string;
  bitrateMbps: number;
}

export interface StreamingHostStopSessionData {
  hostPeerId: string;
  side: string;
  spaceIdGame: string;
  reason: string;
  bitrateMbps: number;
}

export interface StreamingHostSessionSettingsChanged {
  sender: string;
  settingName: string;
  newValue: string;
  oldValue: string;
}

export interface StreamingErrorData {
  errorName: string;
  errorType: string;
  hostPeerId: string;
  side: string;
}

export interface StreamingFeedBackData {
  audioIssue: boolean;
  inputLag: boolean;
  invitationFailed: boolean;
  other: boolean;
  poorConnection: boolean;
  rating: number;
  inputSource: string;
  brand: number;
  invitationId: string;
  hostPerformanceIssue: boolean;
  guestPerformanceIssue: boolean;
  poorGuestBehavior: boolean;
  videoIssue: boolean;
  side: string;
  userType: string;
}

export interface StreamingHostOutOfFocusStartData {
  hostPeerId: string;
  side: string;
  spaceIdGame: string;
}

export interface StreamingHostOutOfFocusStopData {
  hostPeerId: string;
  side: string;
  spaceIdGame: string;
}

export interface StreamingVGPEvent {
  deviceId: number;
  deviceName: string;
  deviceType: string;
  guestProfileId: string;
  hostPeerId: string;
  side: string;
  spaceIdGame: string;
  state: string;
}

export interface EventTypeData {
  gameStart?: GameStartTypeData;
  gameLocalization?: GameLocalizationTypeData;
  contextStart?: ContextStartTypeData;
  contextStop?: ContextStopTypeData;
}

export interface EventObjectData {
  gameLaunch?: GameLaunchObjectData;
  uiNav?: UINavObjectData;
  appStart?: AppStartObjectData;
  download?: DownloadObjectData;
  followLink?: FollowLinkObjectData;
  gameCloudSaveSync?: GameCloudSaveSyncObjectData;
  settingChanged?: SettingChangedObjectData;
  machineConf?: MachineConfObjectData;
  dlError?: DLErrorObjectData;
  appQuit?: AppQuitObjectData;
  decompressSliceError?: DecompressSliceErrorObjectData;
  gameEnd?: GameEndObjectData;
  httpServiceRequest?: HttpServiceRequestObjectData;
  importSteamFriends?: ImportSteamFriendsObjectData;
  activateProduct?: ActivateProductObjectData;
  friendAction?: FriendActionObjectData;
  redeemReward?: RedeemRewardObjectData;
  accountCreation?: AccountCreationObjectData;
  streamingSession?: StreamingSessionObjectData;
  accountLinking?: AccountLinkingObjectData;
  chatSession?: ChatSessionObjectData;
  party?: PartyObjectData;
  challengeAction?: ChallengeActionObjectData;
  newsClick?: NewsClickObjectData;
  newsImpression?: NewsImpressionObjectData;
  newsInteraction?: NewsInteractionObjectData;
  shopAddToCart?: ShopAddToCartObjectData;
  ticketRenewalFailure?: TicketRenewalFailureObjectData;
  groupAction?: GroupActionObjectData;
  diagnostic?: DiagnosticObjectData;
  ingameShopAction?: IngameShopActionObjectData;
  IngameShopImpression?: IngameShopImpressionObjectData;
  promoTabInteraction?: PromoTabInteractionObjectData;
  emailVerification?: EmailVerificationObjectData;
  twoFAActivation?: TwoFAActivationObjectData;
  adImpression?: AdImpressionObjectData;
  popUpDisplayEvent?: PopUpDisplayEventObjectData;
  newsOpen?: NewsOpenObjectData;
  battlePassAction?: BattlePassActionObjectData;
  trustedDeviceAction?: TrustedDeviceActionData;
  friendSuggestionAction?: FriendSuggestionActionObjectData;
  friendSuggestionImpression?: FriendSuggestionImpressionObjectData;
  phoneSecurity?: PhoneSecurityObjectData;
  SendSmsAction?: SendSmsTrackEventActionObjectData;
  sharePlaySessionStart?: SharePlayHostSessionStreamingStartData;
  sharePlaySessionStop?: SharePlayHostSessionStreamingStopData;
  sharePlayHostPage?: SharePlayHostPageData;
  sharePlayGuestInvitation?: SharePlayGuestInvitationData;
  sharePlayHostInvitation?: SharePlayHostInvitationData;
  sharePlayHostError?: SharePlayHostErrorData;
  sharePlayHostSettings?: SharePlayHostSettingsData;
  sharePlayOnboarding?: SharePlayOnboardingData;
  streamingHostOutOfFocusStart?: StreamingHostOutOfFocusStartData;
  streamingHostOutOfFocusStop?: StreamingHostOutOfFocusStopData;
  streamingFeedBack?: StreamingFeedBackData;
  streamingHostStartSession?: StreamingHostStartSessionData;
  streamingHostStopSession?: StreamingHostStopSessionData;
  streamingError?: StreamingErrorData;
  streamingHostSessionSettings?: StreamingHostSessionSettingsChanged;
  streamingVGPEvent?: StreamingVGPEvent;
}

export interface Event {
  type: string;
  seqId: number;
  createdDate: string;
  contexts: number[];
  obj?: EventObjectData;
  typeData?: EventTypeData;
  buildNumber: number;
  clientVersion: string;
  ownedGames: number;
  userType: string;
  mAccount: boolean;
}

export interface TrackingSession {
  endEvent?: Event;
  runtimeSeconds: number;
  secondsSinceStart: number;
}

export interface StatisticsSession {
  events: Event[];
  buildNumber: number;
  accountId: string;
  sessionId: string;
  nextSequenceId: number;
  trackingSessions: TrackingSession[];
  secondsSinceStart: number;
}

export interface StatisticsCache {
  version: number;
  sessions: StatisticsSession[];
  date: string;
}
