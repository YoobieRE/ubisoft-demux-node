/* eslint-disable */
export const protobufPackage = 'mg.protocol.uplaydll';

export enum OperationResult {
  ok = 1,
  invalidArgument = 2,
  connectionError = 3,
  notFound = 4,
  notAPartyLeader = 5,
  partyFull = 6,
  fileError = 7,
  unavailable = 8,
  declined = 9,
  internalError = 10,
  UNRECOGNIZED = -1,
}

export enum ResponseCode {
  success = 1,
  failure = 2,
  UNRECOGNIZED = -1,
}

export enum InitResult {
  InitResult_Success = 1,
  InitResult_Failure = 2,
  InitResult_ReconnectRequired = 3,
  InitResult_RestartWithGameLauncherRequired = 4,
  UNRECOGNIZED = -1,
}

export enum OverlayInjectionMethod {
  OverlayInjectionMethod_None = 1,
  OverlayInjectionMethod_Default = 2,
  OverlayInjectionMethod_SDK = 3,
  UNRECOGNIZED = -1,
}

export enum GameLaunchResult {
  GameLaunchResult_Success = 1,
  GameLaunchResult_Unavailable = 2,
  GameLaunchResult_Aborted = 3,
  GameLaunchResult_FailedGameNotOwned = 4,
  UNRECOGNIZED = -1,
}

export enum GameSessionJoinability {
  JoinableByFriends = 0,
  InviteOnly = 1,
  Closed = 2,
  UNRECOGNIZED = -1,
}

export enum Relationship {
  Relationship_RequestSent = 1,
  Relationship_RequestReceived = 2,
  Relationship_Friend = 3,
  Relationship_None = 4,
  UNRECOGNIZED = -1,
}

export enum OnlineStatus {
  Presence_Online = 1,
  Presence_Offline = 2,
  Presence_InGame = 3,
  UNRECOGNIZED = -1,
}

export enum OnlineStatusV2 {
  OnlineStatus_Offline = 1,
  OnlineStatus_DoNotDisturb = 2,
  OnlineStatus_Away = 4,
  OnlineStatus_Online = 8,
  UNRECOGNIZED = -1,
}

export enum AvatarSize {
  AvatarSize_64 = 1,
  AvatarSize_128 = 2,
  AvatarSize_256 = 3,
  UNRECOGNIZED = -1,
}

export enum ProductType {
  ProductType_Game = 1,
  ProductType_Addon = 2,
  ProductType_Package = 3,
  ProductType_Consumable = 4,
  ProductType_ConsumablePack = 5,
  ProductType_Bundle = 6,
  UNRECOGNIZED = -1,
}

export enum ProductState {
  ProductState_Visible = 1,
  ProductState_Installable = 2,
  ProductState_Playable = 3,
  ProductState_Expired = 4,
  UNRECOGNIZED = -1,
}

export enum ProductActivation {
  ProductActivation_Purchased = 1,
  ProductActivation_Trial = 2,
  ProductActivation_Subscription = 3,
  UNRECOGNIZED = -1,
}

export enum ProductOwnership {
  ProductOwnership_Owned = 1,
  ProductOwnership_Preordered = 2,
  ProductOwnership_Suspended = 3,
  ProductOwnership_NotOwned = 4,
  ProductOwnership_Locked = 5,
  UNRECOGNIZED = -1,
}

export enum CheckoutResult {
  CheckoutResult_Ok = 1,
  CheckoutResult_Failed = 2,
  CheckoutResult_Unknown = 3,
  UNRECOGNIZED = -1,
}

export enum TargetPartner {
  TargetPartner_None = 0,
  TargetPartner_EpicGames = 1,
  UNRECOGNIZED = -1,
}

export enum MultiplayerSessionJoinability {
  MultiplayerSessionJoinability_Closed = 1,
  MultiplayerSessionJoinability_InviteOnly = 2,
  MultiplayerSessionJoinability_FriendsOnly = 3,
  MultiplayerSessionJoinability_Open = 4,
  UNRECOGNIZED = -1,
}

export enum OverlaySection {
  OverlaySection_Show = 0,
  OverlaySection_Home = 1,
  OverlaySection_Achievements = 2,
  OverlaySection_Actions = 3,
  OverlaySection_Chat = 4,
  OverlaySection_Friends = 5,
  OverlaySection_Party = 6,
  OverlaySection_Rewards = 7,
  OverlaySection_Shop = 8,
  OverlaySection_ProductActivation = 9,
  OverlaySection_PendingGameInvites = 10,
  OverlaySection_Challenges = 11,
  OverlaySection_GameOptions = 12,
  UNRECOGNIZED = -1,
}

export enum OverlayState {
  OverlayState_Error = 1,
  OverlayState_Showing = 2,
  OverlayState_Hidden = 3,
  UNRECOGNIZED = -1,
}

export enum UserShutdownReason {
  UserShutdownReason_AccountSharing = 1,
  UNRECOGNIZED = -1,
}

export enum StreamingType {
  StreamingType_None = 0,
  StreamingType_CloudPlay = 1,
  StreamingType_RemotePlay = 2,
  StreamingType_SharePlay = 3,
  UNRECOGNIZED = -1,
}

export enum StreamingDeviceType {
  StreamingDeviceType_Unspecified = 0,
  StreamingDeviceType_Desktop = 1,
  StreamingDeviceType_Smartphone = 2,
  StreamingDeviceType_Tablet = 3,
  StreamingDeviceType_TV = 4,
  UNRECOGNIZED = -1,
}

export enum StreamingInputType {
  StreamingInputType_Unspecified = 0,
  StreamingInputType_Gamepad = 1,
  StreamingInputType_KeyboardMouse = 2,
  StreamingInputType_Touch = 3,
  UNRECOGNIZED = -1,
}

export enum GamepadType {
  GamepadType_Invalid = 0,
  GamepadType_Generic = 1,
  GamepadType_Nintendo = 2,
  GamepadType_PlayStation = 3,
  UNRECOGNIZED = -1,
}

export interface SDKMonitoringArgument {
  name: string;
  value: string;
}

export interface SDKMonitoringInfoPush {
  functionName: string;
  arguments: SDKMonitoringArgument[];
}

export interface SDKMonitoringConfig {
  sdkMonitoringEnabled: boolean;
}

export interface SDKMonitoringReq {
  sdkMonitoringInfoPush?: SDKMonitoringInfoPush;
}

export interface SDKMonitoringRsp {
  sdkMonitoringConfig?: SDKMonitoringConfig;
}

export interface Consumable {
  productId: number;
  quantity: number;
}

export interface DevArgs {
  uatOnly: boolean;
}

export interface InitReq {
  uplayId: number;
  processId: number;
  apiVersion: number;
  subSystemFriend: boolean;
  subSystemOverlay: boolean;
  subSystemProduct: boolean;
  subSystemStorage: boolean;
  subSystemInstall: boolean;
  subSystemMultiplayer: boolean;
  subSystemStore: boolean;
  subSystemStreaming: boolean;
}

export interface InitProcessReq {
  uplayId: number;
  processId: number;
  apiVersion: number;
  devArgs?: DevArgs;
  uplayEnvIsSet: boolean;
}

export interface InitSubSystemOverlayReq {}

export interface GameCdKey {
  uplayId: number;
  cdKey: string;
}

export interface GameOptions {
  name: string;
  filepath: string;
}

export interface GameInstall {
  success: boolean;
  chunks?: Chunks;
  language: string;
}

export interface Account {
  accountId: string;
  username: string;
  nameOnPlatform: string;
  email: string;
  password: string;
}

export interface Overlay {
  enabled: boolean;
  injectionMethod: OverlayInjectionMethod;
}

export interface HardwareBenchmark {
  cpuScore: number;
  gpuScore: number;
  gpuScoreConfidenceLevel: number;
}

export interface Storage {
  savegameStoragePath: string;
}

export interface UbiServices {
  appId: string;
}

export interface InitRsp {
  result: InitResult;
  account?: Account;
  connected: boolean;
  gameUplayId: number;
  uplayIds: number[];
  gameCdKeys: GameCdKey[];
  isInOfflineMode: boolean;
  upcTicket: string;
  consumables: Consumable[];
  uplayPID: number;
  sdkMonitoringConfig?: SDKMonitoringConfig;
  devmode: boolean;
  gameOptions?: GameOptions;
  gameInstall?: GameInstall;
  overlay?: Overlay;
  hwBenchmark?: HardwareBenchmark;
  storage?: Storage;
  friendInit?: FriendInit;
  storeInit?: StoreInit;
  multiplayerInit?: MultiplayerInit;
  userInit?: UserInit;
  ubiServices?: UbiServices;
}

export interface InitProcessRsp {
  result: InitResult;
  uplayPID: number;
  overlayEnabled: boolean;
  overlayInjectionMethod: OverlayInjectionMethod;
  sdkMonitoringConfig?: SDKMonitoringConfig;
  devmode: boolean;
}

export interface InitSubSystemOverlayRsp {}

export interface RichPresenceTokenPair {
  key: string;
  value: string;
}

export interface SetRichPresenceReq {
  requestId: number;
  presenceId: number;
  presenceTokens: RichPresenceTokenPair[];
}

export interface SetRichPresenceRsp {
  requestId: number;
  result: OperationResult;
}

export interface RichPresenceReq {
  setReq?: SetRichPresenceReq;
}

export interface AchievementInBlob {
  achievementId: number;
  titleId: number;
  descriptionId: number;
  imageId: number;
}

export interface AchievementsBlob {
  achievements: AchievementInBlob[];
}

export interface TakenAchievement {
  achievement?: AchievementInBlob;
  timestamp: number;
}

export interface Spool {
  achievementsTaken: TakenAchievement[];
}

export interface WriteAchievementsReq {
  achievement?: AchievementInBlob;
}

export interface WriteAchievementsRsp {
  status: boolean;
}

export interface AchievementData {
  id: number;
  name: string;
  description: string;
  isEarned: boolean;
  timestamp: number;
}

export interface GetAchievementsReq {
  requestId: number;
  onlyEarned: boolean;
  accountId: string;
  languageCountryCode: string;
}

export interface GetAchievementsRsp {
  requestId: number;
  result: OperationResult;
  data: AchievementData[];
}

export interface GetAchievementImageReq {
  requestId: number;
  id: number;
}

export interface GetAchievementImageRsp {
  requestId: number;
  result: OperationResult;
  data: Buffer;
}

export interface EarnAchievementReq {
  requestId: number;
  id: number;
}

export interface EarnAchievementRsp {
  requestId: number;
  result: OperationResult;
}

export interface AchievementReq {
  getReq?: GetAchievementsReq;
  imageReq?: GetAchievementImageReq;
  earnReq?: EarnAchievementReq;
}

export interface AchievementRsp {
  getRsp?: GetAchievementsRsp;
  imageRsp?: GetAchievementImageRsp;
  earnRsp?: EarnAchievementRsp;
}

export interface GameSession {
  id: number;
  data: Buffer;
  joinability: GameSessionJoinability;
}

export interface UserData {
  data: Buffer;
}

export interface Guest {
  name: string;
}

export interface PartyMember {
  accountId: string;
  name: string;
  gameSessionId: number;
  gameSessionData: Buffer;
  guest?: Guest;
  userData: Buffer;
}

export interface InitPartyReq {
  enableGameInviteReceivedEvent: boolean;
  enableGuests: boolean;
}

export interface InitPartyRsp {
  accountId: string;
}

export interface InviteToPartyReq {
  requestId: number;
  accountId: string;
}

export interface InviteToPartyRsp {
  requestId: number;
  result: OperationResult;
}

export interface InvitePartyToGameReq {
  requestId: number;
}

export interface InvitePartyToGameRsp {
  requestId: number;
  result: OperationResult;
}

export interface ShowGameInviteOverlayUIReq {
  inviteId: number;
  gameSession?: GameSession;
}

export interface PartyListUpdatedPush {
  members: PartyMember[];
  leader: string;
  partyId: number;
}

export interface SetUserDataReq {
  data: Buffer;
}

export interface PromoteToLeaderReq {
  requestId: number;
  accountId: string;
}

export interface PromoteToLeaderRsp {
  requestId: number;
  result: OperationResult;
}

export interface SetInPartyGameSessionReq {}

export interface GameInvitePush {
  inviteId: number;
  gameSession?: GameSession;
  fromAccountId: string;
}

export interface GameInviteAcceptedPush {
  inviteId: number;
}

export interface GameInviteDeclinedPush {
  inviteId: number;
}

export interface PartyInvitePush {
  accountId: string;
}

export interface PartyReq {
  initPartyReq?: InitPartyReq;
  inviteToPartyReq?: InviteToPartyReq;
  invitePartyToGameReq?: InvitePartyToGameReq;
  setUserDataReq?: SetUserDataReq;
  promoteToLeaderReq?: PromoteToLeaderReq;
  gameInviteOverlayUIReq?: ShowGameInviteOverlayUIReq;
}

export interface PartyRsp {
  initPartyRsp?: InitPartyRsp;
  listUpdatePush?: PartyListUpdatedPush;
  gameInviteAcceptedPush?: GameInviteAcceptedPush;
  gameInviteDeclinedPush?: GameInviteDeclinedPush;
  invitePartyToGameRsp?: InvitePartyToGameRsp;
  inviteToPartyRsp?: InviteToPartyRsp;
  gameInvitePush?: GameInvitePush;
  promoteToLeaderRsp?: PromoteToLeaderRsp;
  partyInvitePush?: PartyInvitePush;
}

export interface SetGameSessionReq {
  gameSession?: GameSession;
}

export interface ClearGameSessionReq {}

export interface GetCredentialsReq {
  requestId: number;
}

export interface GetCredentialsRsp {
  requestId: number;
  username: string;
  password: string;
  accountId: string;
  email: string;
}

export interface AccountSharingPush {}

export interface ConnectionLostPush {}

export interface ConnectionRestoredPush {}

export interface OwnershipAddedPush {
  uplayId: number;
  cdKey: string;
  product?: Product;
}

export interface OwnershipRemovedPush {
  uplayIds: number[];
}

export interface TrialAboutToExpirePush {
  minutesBeforeEnd: number;
}

export interface TrialExpiredPush {}

export interface TicketPush {
  ticket: string;
}

export interface ConsumeItemReq {
  requestId: number;
  productId: number;
  quantity: number;
  transactionId: string;
  signature: string;
}

export interface ConsumeItemRsp {
  requestId: number;
  result: ConsumeItemRsp_Result;
  signature: string;
}

export enum ConsumeItemRsp_Result {
  Result_Success = 0,
  Result_NotEnoughItems = 1,
  Result_Failure = 2,
  UNRECOGNIZED = -1,
}

export interface ConsumableUpdatedPush {
  consumable?: Consumable;
}

export interface GetProfileReq {
  requestId: number;
  accountId: string;
}

export interface GetProfileRsp {
  requestId: number;
  result: OperationResult;
  name: string;
}

export interface UserReq {
  getCredentialsReq?: GetCredentialsReq;
  consumeItemReq?: ConsumeItemReq;
  getProfileReq?: GetProfileReq;
}

export interface UserRsp {
  getCredentialsRsp?: GetCredentialsRsp;
  accountSharingPush?: AccountSharingPush;
  ownershipAddedPush?: OwnershipAddedPush;
  ticketPush?: TicketPush;
  consumeItemRsp?: ConsumeItemRsp;
  consumableUpdatedPush?: ConsumableUpdatedPush;
  ownershipRemovedPush?: OwnershipRemovedPush;
  getProfileRsp?: GetProfileRsp;
  trialAboutToExpirePush?: TrialAboutToExpirePush;
  trialExpiredPush?: TrialExpiredPush;
}

export interface Friend {
  accountId: string;
  name: string;
  nickname: string;
  relationship: Relationship;
  blackListed: boolean;
  presence: OnlineStatus;
  playingCurrentGame: boolean;
  gameSession?: GameSession;
}

export interface InitFriendsReq {}

export interface FriendInit {
  friendList: string[];
  isAvailable: boolean;
}

export interface FriendListUpdatedPush {
  friendList: Friend[];
}

export interface FriendListUpdatedPushV2 {
  friendsAdded: User[];
  friendsNameUpdated: User[];
  friendsPresenceUpdated: User[];
  friendsRemoved: User[];
}

export interface GameSessionUpdate {
  gameSession?: GameSession;
}

export interface RequestFriendshipReq {
  requestId: number;
  searchString: string;
}

export interface RequestFriendshipRsp {
  requestId: number;
  result: OperationResult;
}

export interface AddToBlackListReq {
  requestId: number;
  accountId: string;
}

export interface AddToBlackListRsp {
  requestId: number;
  result: OperationResult;
}

export interface RemoveFromBlackListReq {
  requestId: number;
  accountId: string;
}

export interface RemoveFromBlackListRsp {
  requestId: number;
  result: OperationResult;
}

export interface SendGameInviteReq {
  requestId: number;
}

export interface SendGameInviteRsp {
  requestId: number;
  result: OperationResult;
}

export interface FriendSelectionFilter {
  allowedAccountIds: string[];
}

export interface ShowFriendSelectionUIReq {
  requestId: number;
  filter?: FriendSelectionFilter;
}

export interface ShowFriendSelectionUISuccess {
  accountId: string;
}

export interface ShowFriendSelectionUICanceled {}

export interface ShowFriendSelectionUIEmptyList {}

export interface ShowFriendSelectionUIRsp {
  requestId: number;
  success?: ShowFriendSelectionUISuccess;
  cancelled?: ShowFriendSelectionUICanceled;
  emptyList?: ShowFriendSelectionUIEmptyList;
}

export interface FriendCustomMenuItemSelectedPush {
  itemId: number;
  accountId: string;
}

export interface FriendsGameInviteAcceptReq {
  inviteId: number;
  isAccepted: boolean;
}

export interface FriendsGameInviteAcceptedPush {
  gameSession?: GameSession;
  accountId: string;
}

export interface FriendsGameInvitePush {
  inviteId: number;
  fromAccountId: string;
}

export interface InviteFriendToGameReq {
  requestId: number;
  accountId: string;
}

export interface InviteFriendToGameRsp {
  requestId: number;
  result: OperationResult;
}

export interface ShowInviteFriendsToGameUIReq {
  allowedAccountIds: string[];
}

export interface AddPlayedWithReq {
  requestId: number;
  description: string;
  accountIds: string[];
}

export interface AddPlayedWithRsp {
  requestId: number;
  result: OperationResult;
}

export interface RemoveFriendshipReq {
  requestId: number;
  accountId: string;
}

export interface RemoveFriendshipRsp {
  requestId: number;
  result: OperationResult;
}

export interface GetNameReq {
  requestId: number;
  accountId: string;
}

export interface GetNameRsp {
  requestId: number;
  result: OperationResult;
  name: string;
}

export interface Presence {
  onlineStatus: OnlineStatusV2;
  details: string;
  titleId: number;
  titleName: string;
  multiplayerId: string;
  multiplayerJoinable: boolean;
  multiplayerSize: number;
  multiplayerMaxSize: number;
  multiplayerInternalData: string;
}

export interface User {
  id: string;
  name: string;
  relationship: Relationship;
  presence?: Presence;
}

export interface GetFriendListReq {
  requestId: number;
  accountId: string;
  onlineStatusFilter: number;
  languageCountryCode: number;
}

export interface GetFriendListRsp {
  requestId: number;
  result: OperationResult;
  friendList: User[];
}

export interface FriendsReq {
  initReq?: InitFriendsReq;
  requestFriendshipReq?: RequestFriendshipReq;
  addToBlackListReq?: AddToBlackListReq;
  showFriendSelectionUIReq?: ShowFriendSelectionUIReq;
  inviteFriendToGameReq?: InviteFriendToGameReq;
  showInviteFriendsToGameUIReq?: ShowInviteFriendsToGameUIReq;
  addPlayedWithReq?: AddPlayedWithReq;
  removeFriendshipReq?: RemoveFriendshipReq;
  removeFromBlackListReq?: RemoveFromBlackListReq;
  getNameReq?: GetNameReq;
  gameInviteAcceptReq?: FriendsGameInviteAcceptReq;
  getFriendListReq?: GetFriendListReq;
}

export interface FriendsRsp {
  friendListUpdatedPush?: FriendListUpdatedPush;
  friendsGameInviteAcceptedPush?: FriendsGameInviteAcceptedPush;
  requestFriendhipRsp?: RequestFriendshipRsp;
  addToBlackListRsp?: AddToBlackListRsp;
  sendGameInviteRsp?: SendGameInviteRsp;
  showFriendSelectionUIRsp?: ShowFriendSelectionUIRsp;
  inviteFriendToGameRsp?: InviteFriendToGameRsp;
  removeFriendshipRsp?: RemoveFriendshipRsp;
  removeFromBlackListRsp?: RemoveFromBlackListRsp;
  getNameRsp?: GetNameRsp;
  getFriendListRsp?: GetFriendListRsp;
  gameInvitePush?: FriendsGameInvitePush;
  friendListUpdatedPushV2?: FriendListUpdatedPushV2;
}

export interface GetAvatarReq {
  requestId: number;
  accountId: string;
  size: AvatarSize;
}

export interface GetAvatarRsp {
  requestId: number;
  bitmap: Buffer;
  result: OperationResult;
}

export interface AvatarReq {
  getAvatarReq?: GetAvatarReq;
}

export interface AvatarRsp {
  getAvatarRsp?: GetAvatarRsp;
}

export interface Product {
  id: number;
  type: ProductType;
  ownership: ProductOwnership;
  state: ProductState;
  balance: number;
  activation: ProductActivation;
}

export interface GetProductListReq {
  requestId: number;
  filter: number;
  accountId: string;
}

export interface GetProductListRsp {
  requestId: number;
  result: OperationResult;
  productList: Product[];
}

export interface ProductConsumeReq {
  requestId: number;
  productId: number;
  quantity: number;
  transactionId: string;
  signature: string;
}

export interface ProductConsumeRsp {
  requestId: number;
  result: OperationResult;
  signature: string;
}

export interface ProductAddedPush {
  product?: Product;
}

export interface ProductUpdatedPush {
  id: number;
  ownership: ProductOwnership;
  state: ProductState;
  balance: number;
}

export interface ProductReq {
  getProductListReq?: GetProductListReq;
  productConsumeReq?: ProductConsumeReq;
}

export interface ProductRsp {
  getProductListRsp?: GetProductListRsp;
  productConsumeRsp?: ProductConsumeRsp;
  productAddedPush?: ProductAddedPush;
  productUpdatedPush?: ProductUpdatedPush;
}

export interface StoreProduct {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  isOwned: boolean;
  price: number;
  priceOriginal: number;
  currency: string;
  userBlob: string;
  tags: number[];
}

export interface StoreInit {
  isAvailable: boolean;
  targetPartner: TargetPartner;
}

export interface GetStoreProductsReq {
  requestId: number;
}

export interface GetStoreProductsRsp {
  requestId: number;
  result: OperationResult;
  productsList: StoreProduct[];
}

export interface CheckoutReq {
  id: number;
}

export interface ShowProductDetailsReq {
  id: number;
}

export interface ShowProductsReq {
  tags: number[];
}

export interface ProductsListChangedPush {}

export interface StoreCheckoutStartedPush {
  id: number;
}

export interface StoreCheckoutFinishedPush {
  id: number;
  result: CheckoutResult;
}

export interface StoreStatusUpdatedPush {
  isAvailable: boolean;
}

export interface StoreReq {
  getStoreProductsReq?: GetStoreProductsReq;
  checkoutReq?: CheckoutReq;
  showProductDetailsReq?: ShowProductDetailsReq;
  showProductsReq?: ShowProductsReq;
  setLanguageReq?: SetLanguageCountryCodeReq;
}

export interface StoreRsp {
  getStoreProductsRsp?: GetStoreProductsRsp;
  productsListChangedPush?: ProductsListChangedPush;
  storeCheckoutStartedPush?: StoreCheckoutStartedPush;
  storeCheckoutFinishedPush?: StoreCheckoutFinishedPush;
  storeStatusUpdatedPush?: StoreStatusUpdatedPush;
}

export interface MultiplayerSession {
  id: string;
  joinability: MultiplayerSessionJoinability;
  size: number;
  maxSize: number;
  internalData: Buffer;
}

export interface MultiplayerInit {
  session?: MultiplayerSession;
  isAvailable: boolean;
}

export interface MultiplayerSessionSetReq {
  requestId: number;
  session?: MultiplayerSession;
}

export interface MultiplayerSessionSetRsp {
  requestId: number;
  result: OperationResult;
}

export interface MultiplayerInviteReq {
  requestId: number;
  userId: string;
}

export interface MultiplayerInviteRsp {
  requestId: number;
  result: OperationResult;
}

export interface MultiplayerInviteCancelReq {
  userId: string;
}

export interface MultiplayerInviteAnswerReq {
  requestId: number;
  senderId: string;
  isAccepted: boolean;
}

export interface MultiplayerInviteAnswerRsp {
  requestId: number;
  result: OperationResult;
}

export interface MultiplayerInviteReceivedPush {
  senderId: string;
  session?: MultiplayerSession;
}

export interface MultiplayerInviteAcceptedPush {
  senderId: string;
  session?: MultiplayerSession;
}

export interface MultiplayerInviteDeclinedPush {
  senderId: string;
}

export interface MultiplayerSessionUpdatedPush {
  session?: MultiplayerSession;
}

export interface MultiplayerJoiningRequestedPush {
  session?: MultiplayerSession;
}

export interface MultiplayerReq {
  multiplayerSessionSetReq?: MultiplayerSessionSetReq;
  multiplayerInviteReq?: MultiplayerInviteReq;
  multiplayerInviteCancelReq?: MultiplayerInviteCancelReq;
  multiplayerInviteAnswerReq?: MultiplayerInviteAnswerReq;
}

export interface MultiplayerRsp {
  multiplayerSessionSetRsp?: MultiplayerSessionSetRsp;
  multiplayerInviteRsp?: MultiplayerInviteRsp;
  multiplayerInviteAnswerRsp?: MultiplayerInviteAnswerRsp;
  multiplayerInviteReceivedPush?: MultiplayerInviteReceivedPush;
  multiplayerInviteAcceptedPush?: MultiplayerInviteAcceptedPush;
  multiplayerInviteDeclinedPush?: MultiplayerInviteDeclinedPush;
  multiplayerSessionUpdatedPush?: MultiplayerSessionUpdatedPush;
  multiplayerJoiningRequestedPush?: MultiplayerJoiningRequestedPush;
}

export interface OverlayShowReq {
  requestId: number;
  section: OverlaySection;
}

export interface OverlayShowRsp {
  requestId: number;
  result: OperationResult;
}

export interface OverlayStateChangedPush {
  state: OverlayState;
}

export interface OverlaySetShopUrlReq {
  requestId: number;
  url: string;
}

export interface OverlaySetShopUrlRsp {
  requestId: number;
  result: OperationResult;
}

export interface OverlayShowShopUrlReq {
  url: string;
}

export interface OverlayShowBrowserUrlReq {
  requestId: number;
  url: string;
}

export interface OverlayShowBrowserUrlRsp {
  requestId: number;
  result: OperationResult;
}

export interface OverlayShowNotificationReq {
  requestId: number;
  notificationId: number;
}

export interface OverlayShowNotificationRsp {
  requestId: number;
  result: OperationResult;
}

export interface OverlayShowFriendInvitationReq {
  requestId: number;
  userIds: string[];
}

export interface OverlayShowFriendInvitationRsp {
  requestId: number;
  result: OperationResult;
}

export interface OverlayShowFriendSelectionReq {
  requestId: number;
  userIds: string[];
}

export interface OverlayShowFriendSelectionRsp {
  requestId: number;
  result: OperationResult;
  selectedIds: string[];
}

export interface OverlayMicroAppParam {
  name: string;
  value: string;
}

export interface OverlayShowMicroAppReq {
  requestId: number;
  microAppName: string;
  microAppParams: OverlayMicroAppParam[];
}

export interface OverlayShowMicroAppRsp {
  requestId: number;
  result: OperationResult;
}

export interface SetLanguageCountryCodeReq {
  languageCountryCode: string;
}

export interface OverlayReq {
  overlayShowReq?: OverlayShowReq;
  overlaySetShopUrlReq?: OverlaySetShopUrlReq;
  overlayShowShopUrlReq?: OverlayShowShopUrlReq;
  overlayShowBrowserUrlReq?: OverlayShowBrowserUrlReq;
  overlayShowNotificationReq?: OverlayShowNotificationReq;
  overlayShowFriendInvitationReq?: OverlayShowFriendInvitationReq;
  overlayShowFriendSelectionReq?: OverlayShowFriendSelectionReq;
  overlayShowMicroAppReq?: OverlayShowMicroAppReq;
}

export interface OverlayRsp {
  overlayShowRsp?: OverlayShowRsp;
  overlaySetShopUrlRsp?: OverlaySetShopUrlRsp;
  overlayShowBrowserUrlRsp?: OverlayShowBrowserUrlRsp;
  overlayShowNotificationRsp?: OverlayShowNotificationRsp;
  overlayShowFriendInvitationRsp?: OverlayShowFriendInvitationRsp;
  overlayShowFriendSelectionRsp?: OverlayShowFriendSelectionRsp;
  overlayStateChangedPush?: OverlayStateChangedPush;
  overlayShowMicroAppRsp?: OverlayShowMicroAppRsp;
}

export interface UserInit {
  blacklistedList: string[];
  isAvailable: boolean;
}

export interface UserBlacklistUpdatedPush {
  added: string[];
  removed: string[];
}

export interface UserShutdownPush {
  reason: UserShutdownReason;
}

export interface UserAddToBlacklistReq {
  requestId: number;
  userId: string;
}

export interface UserAddToBlacklistRsp {
  requestId: number;
  result: OperationResult;
}

export interface UserGetReq {
  requestId: number;
  userId: string;
}

export interface UserGetRsp {
  requestId: number;
  result: OperationResult;
  user?: User;
}

export interface UserReqV2 {
  userGetReq?: UserGetReq;
  userAddToBlacklistReq?: UserAddToBlacklistReq;
  setRichPresenceReq?: SetRichPresenceReq;
  addPlayedWithReq?: AddPlayedWithReq;
}

export interface UserRspV2 {
  userGetRsp?: UserGetRsp;
  userAddToBlacklistRsp?: UserAddToBlacklistRsp;
  setRichPresenceRsp?: SetRichPresenceRsp;
  addPlayedWithRsp?: AddPlayedWithRsp;
  userBlacklistUpdatedPush?: UserBlacklistUpdatedPush;
  userShutdownPush?: UserShutdownPush;
}

export interface Reward {
  name: string;
  description: string;
  code: string;
  url: string;
  cost: number;
  gameCode: string;
  platformCode: string;
  imageUrl: string;
  redeemed: boolean;
}

export interface GetRewardsReq {
  requestId: number;
  languageCountryCode: string;
}

export interface GetRewardsRsp {
  requestId: number;
  result: OperationResult;
  rewards: Reward[];
}

export interface RewardRedeemedPush {
  reward?: Reward;
}

export interface Action {
  id: string;
  name: string;
  description: string;
  units: number;
  imageUrl: string;
  completed: boolean;
  conditionalRewardNames: string[];
  code: string;
}

export interface GetActionsReq {
  requestId: number;
  languageCountryCode: string;
}

export interface GetActionsRsp {
  requestId: number;
  result: OperationResult;
  actions: Action[];
}

export interface RefreshActionsReq {}

export interface SetActionsCompletedReq {
  requestId: number;
  actionIds: string[];
}

export interface SetActionsCompletedRsp {
  requestId: number;
  result: OperationResult;
}

export interface GetUnitBalanceReq {
  requestId: number;
}

export interface GetUnitBalanceRsp {
  requestId: number;
  result: OperationResult;
  balance: number;
}

export interface UnitBalancePush {
  balance: number;
}

export interface ClubReq {
  getRewardsReq?: GetRewardsReq;
  refreshActionsReq?: RefreshActionsReq;
  setActionsCompletedReq?: SetActionsCompletedReq;
  getActionsReq?: GetActionsReq;
  getUnitBalanceReq?: GetUnitBalanceReq;
}

export interface ClubRsp {
  getRewardsRsp?: GetRewardsRsp;
  rewardRedeemedPush?: RewardRedeemedPush;
  setActionsCompletedRsp?: SetActionsCompletedRsp;
  getActionsRsp?: GetActionsRsp;
  getUnitBalanceRsp?: GetUnitBalanceRsp;
  unitBalancePush?: UnitBalancePush;
}

export interface ChunkInfo {
  chunkId: number;
  downloaded: boolean;
  tags: string;
}

export interface Chunks {
  chunks: ChunkInfo[];
}

export interface UpdateInstallOrderReq {
  requestId: number;
  chunks?: Chunks;
}

export interface UpdateInstallOrderRsp {
  requestId: number;
  result: OperationResult;
}

export interface ChunkInstalledPush {
  chunkId: number;
}

export interface ChunkProgressPush {
  chunkId: number;
  installedBytes: number;
  sizeInBytes: number;
}

export interface ProgressPush {
  installedBytes: number;
  sizeInBytes: number;
  bytesPerSecond: number;
}

export interface InitInstallerReq {
  simulateConfigFile: string;
}

export interface InitInstallerRsp {
  success: boolean;
  chunks?: Chunks;
  language: string;
}

export interface InstallerReq {
  initInstallerReq?: InitInstallerReq;
  updateInstallOrderReq?: UpdateInstallOrderReq;
}

export interface UpdateAvailablePush {}

export interface InstallerRsp {
  initInstallerRsp?: InitInstallerRsp;
  updateInstallOrderRsp?: UpdateInstallOrderRsp;
  chunkInstalledPush?: ChunkInstalledPush;
  chunkProgressPush?: ChunkProgressPush;
  progressPush?: ProgressPush;
  updateAvailablePush?: UpdateAvailablePush;
}

export interface SingleEventTag {
  name: string;
  value: string;
}

export interface ContinuousTag {
  name: string;
  value: string;
}

export interface ClearContinuousTag {
  name: string;
}

export interface MetadataReq {
  singleEventTag?: SingleEventTag;
  continuousTag?: ContinuousTag;
  clearContinuousTag?: ClearContinuousTag;
}

export interface SetGameOptionsInGameStateReq {
  canApplyOptions: boolean;
}

export interface GameOptionsReq {
  setInGameStateReq?: SetGameOptionsInGameStateReq;
}

export interface TerminateGamePush {}

export interface LaunchAppReq {
  productId: number;
}

export interface LaunchAppRsp {
  result: GameLaunchResult;
}

export interface GetStreamingCurrentUserCountryReq {}

export interface GetStreamingCurrentUserCountryRsp {
  userCountry: string;
}

export interface GetStreamingTypeReq {}

export interface GetStreamingTypeRsp {
  streamingType: StreamingType;
}

export interface GetStreamingNetworkDelayForInputReq {}

export interface GetStreamingNetworkDelayForInputRsp {
  delay: number;
}

export interface GetStreamingNetworkDelayForVideoReq {}

export interface GetStreamingNetworkDelayForVideoRsp {
  delay: number;
}

export interface GetStreamingNetworkDelayRoundtripReq {}

export interface GetStreamingNetworkDelayRoundtripRsp {
  delay: number;
}

export interface GetStreamingDeviceTypeReq {}

export interface GetStreamingDeviceTypeRsp {
  streamingDeviceType: StreamingDeviceType;
}

export interface GetStreamingInputTypeReq {}

export interface GetStreamingInputTypeRsp {
  streamingInputType: StreamingInputType;
}

export interface GetStreamingInputGamepadTypeReq {}

export interface GetStreamingInputGamepadTypeRsp {
  streamingInputGamepadType: GamepadType;
}

export interface GetStreamingResolutionReq {}

export interface Dimension2d {
  width: number;
  height: number;
}

export interface GetStreamingResolutionRsp {
  streamingResolution?: Dimension2d;
}

export interface StreamingReq {
  requestId: number;
  req?:
    | {
        $case: 'getStreamingCurrentUserCountryReq';
        getStreamingCurrentUserCountryReq: GetStreamingCurrentUserCountryReq;
      }
    | { $case: 'getStreamingTypeReq'; getStreamingTypeReq: GetStreamingTypeReq }
    | {
        $case: 'getStreamingNetworkDelayForInputReq';
        getStreamingNetworkDelayForInputReq: GetStreamingNetworkDelayForInputReq;
      }
    | {
        $case: 'getStreamingNetworkDelayForVideoReq';
        getStreamingNetworkDelayForVideoReq: GetStreamingNetworkDelayForVideoReq;
      }
    | {
        $case: 'getStreamingNetworkDelayRoundtripReq';
        getStreamingNetworkDelayRoundtripReq: GetStreamingNetworkDelayRoundtripReq;
      }
    | { $case: 'getStreamingDeviceTypeReq'; getStreamingDeviceTypeReq: GetStreamingDeviceTypeReq }
    | { $case: 'getStreamingInputTypeReq'; getStreamingInputTypeReq: GetStreamingInputTypeReq }
    | {
        $case: 'getStreamingInputGamepadTypeReq';
        getStreamingInputGamepadTypeReq: GetStreamingInputGamepadTypeReq;
      }
    | { $case: 'GetStreamingResolutionReq'; GetStreamingResolutionReq: GetStreamingResolutionReq };
}

export interface StreamingRsp {
  requestId: number;
  result: OperationResult;
  rsp?:
    | {
        $case: 'getStreamingCurrentUserCountryRsp';
        getStreamingCurrentUserCountryRsp: GetStreamingCurrentUserCountryRsp;
      }
    | { $case: 'getStreamingTypeRsp'; getStreamingTypeRsp: GetStreamingTypeRsp }
    | {
        $case: 'getStreamingNetworkDelayForInputRsp';
        getStreamingNetworkDelayForInputRsp: GetStreamingNetworkDelayForInputRsp;
      }
    | {
        $case: 'getStreamingNetworkDelayForVideoRsp';
        getStreamingNetworkDelayForVideoRsp: GetStreamingNetworkDelayForVideoRsp;
      }
    | {
        $case: 'getStreamingNetworkDelayRoundtripRsp';
        getStreamingNetworkDelayRoundtripRsp: GetStreamingNetworkDelayRoundtripRsp;
      }
    | { $case: 'getStreamingDeviceTypeRsp'; getStreamingDeviceTypeRsp: GetStreamingDeviceTypeRsp }
    | { $case: 'getStreamingInputTypeRsp'; getStreamingInputTypeRsp: GetStreamingInputTypeRsp }
    | {
        $case: 'getStreamingInputGamepadTypeRsp';
        getStreamingInputGamepadTypeRsp: GetStreamingInputGamepadTypeRsp;
      }
    | { $case: 'GetStreamingResolutionRsp'; GetStreamingResolutionRsp: GetStreamingResolutionRsp };
}

export interface Req {
  initReq?: InitReq;
  initProcessReq?: InitProcessReq;
  writeAchievementsReq?: WriteAchievementsReq;
  partyReq?: PartyReq;
  setGameSessionReq?: SetGameSessionReq;
  clearGameSessionReq?: ClearGameSessionReq;
  friendsReq?: FriendsReq;
  achievementReq?: AchievementReq;
  overlayReq?: OverlayReq;
  avatarReq?: AvatarReq;
  userReq?: UserReq;
  clubReq?: ClubReq;
  installerReq?: InstallerReq;
  metadataReq?: MetadataReq;
  sdkMonitoringReq?: SDKMonitoringReq;
  richPresenceReq?: RichPresenceReq;
  storeReq?: StoreReq;
  gameOptionsReq?: GameOptionsReq;
  setLanguageCountryCodeReq?: SetLanguageCountryCodeReq;
  productReq?: ProductReq;
  multiplayerReq?: MultiplayerReq;
  userReqV2?: UserReqV2;
  launchAppReq?: LaunchAppReq;
  streamingReq?: StreamingReq;
}

export interface Rsp {
  initRsp?: InitRsp;
  initProcessRsp?: InitProcessRsp;
  writeAchievementsRsp?: WriteAchievementsRsp;
  partyRsp?: PartyRsp;
  friendsRsp?: FriendsRsp;
  achievementRsp?: AchievementRsp;
  overlayRsp?: OverlayRsp;
  avatarRsp?: AvatarRsp;
  userRsp?: UserRsp;
  clubRsp?: ClubRsp;
  installerRsp?: InstallerRsp;
  sdkMonitoringRsp?: SDKMonitoringRsp;
  storeRsp?: StoreRsp;
  productRsp?: ProductRsp;
  multiplayerRsp?: MultiplayerRsp;
  userRspV2?: UserRspV2;
  terminateGamePush?: TerminateGamePush;
  launchAppRsp?: LaunchAppRsp;
  streamingRsp?: StreamingRsp;
}
