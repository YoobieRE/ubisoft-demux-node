/* eslint-disable */
export const protobufPackage = 'mg.protocol.ownership';

export enum SubscriptionState {
  SubscriptionState_NoState = 0,
  SubscriptionState_Subscribed = 1,
  SubscriptionState_Expired = 2,
  UNRECOGNIZED = -1,
}

export interface StoreData {
  storeRef: string;
  configuration: string;
  associations: number[];
  promotionScore: number;
}

export interface UbiServicesDynamicConfig {
  lunaAppId: string;
  gfnAppId: string;
}

export interface OwnedGame {
  productId: number;
  cdKey: string;
  owned: boolean;
  orbitProductId: number;
  configVersion: number;
  downloadId: number;
  downloadVersion: number;
  titleId: number;
  platform: number;
  productType: number;
  state: number;
  orbitGameVersion: number;
  orbitGameVersionUrl: string;
  productAssociations: number[];
  configuration: string;
  deprecatedTestConfig: boolean;
  uplayId: number;
  latestManifest: string;
  gameCode: string;
  balance: number;
  encryptionKey: string;
  activeBranchId: number;
  availableBranches: OwnedGame_ProductBranch[];
  activationIds: number[];
  brandId: number;
  pendingKeystorageOwnership: boolean;
  ubiservicesSpaceId: string;
  ubiservicesAppId: string;
  storeData?: StoreData;
  packageOwnershipState: OwnedGame_PackageOwnershipState;
  suspensionType: OwnedGame_SuspensionType;
  ingameStoreData?: StoreData;
  activationType: OwnedGame_ActivationType;
  lockedBySubscription: boolean;
  targetPartner: OwnedGame_TargetPartner;
  denuvoActivationOverwrite: OwnedGame_DenuvoActivationOverwrite;
  subscriptionTypes: number[];
  ubiservicesDynamicConfig?: UbiServicesDynamicConfig;
}

export enum OwnedGame_PackageOwnershipState {
  PackageOwnershipState_Full = 0,
  PackageOwnershipState_Trial = 1,
  PackageOwnershipState_Suspended = 2,
  UNRECOGNIZED = -1,
}

export enum OwnedGame_SuspensionType {
  SuspensionType_None = 0,
  SuspensionType_Cheating = 1,
  SuspensionType_Harassment = 2,
  UNRECOGNIZED = -1,
}

export enum OwnedGame_ActivationType {
  ActivationType_Purchase = 0,
  ActivationType_Subscription = 2,
  UNRECOGNIZED = -1,
}

export enum OwnedGame_TargetPartner {
  TargetPartner_None = 0,
  TargetPartner_EpicGames = 1,
  TargetPartner_Neowiz = 2,
  TargetPartner_Microsoft = 3,
  UNRECOGNIZED = -1,
}

export enum OwnedGame_DenuvoActivationOverwrite {
  DenuvoActivationOverwrite_Default = 0,
  DenuvoActivationOverwrite_TimeTrial = 1,
  UNRECOGNIZED = -1,
}

export enum OwnedGame_ProductType {
  ProductType_Game = 0,
  ProductType_AddOn = 1,
  ProductType_PreOrderGame = 2,
  ProductType_PreOrderAddOn = 3,
  ProductType_Trial = 4,
  ProductType_Template = 5,
  ProductType_Bundle = 6,
  ProductType_SeasonPass = 7,
  ProductType_Consumable = 8,
  ProductType_Preorder = 9,
  ProductType_ConsumablePacks = 10,
  ProductType_BundlePackage = 11,
  UNRECOGNIZED = -1,
}

export enum OwnedGame_State {
  State_Unavailable = 0,
  State_PreReleased = 1,
  State_Downloadable = 2,
  State_Released = 3,
  State_Expired = 4,
  UNRECOGNIZED = -1,
}

export interface OwnedGame_ProductBranch {
  branchId: number;
  branchName: string;
}

export interface OwnedGamesContainer {
  productIds: number[];
  signature: Buffer;
  visibleOrInstallableProductIds: number[];
}

export interface OwnedGames {
  ownedGames: OwnedGame[];
}

export interface InitializeReq {
  deprecatedTestConfig?: boolean;
  getAssociations: boolean;
  protoVersion: number;
  branches?: InitializeReq_ProductBranchData[];
  useStaging: boolean;
  claims?: string[];
  /** @deprecated */
  clientIpOverride?: number;
}

export interface InitializeReq_ProductBranchData {
  productId: number;
  activeBranchId: number;
  passwords: string[];
}

export interface InitializeRsp {
  success: boolean;
  ownedGames?: OwnedGames;
  ownedGamesContainer?: OwnedGamesContainer;
  keySpamBanSeconds: number;
  subscriptionState: SubscriptionState;
  subscriptionType: number;
  claimedGames?: OwnedGames;
}

export interface DeprecatedGetProductFromCdKeyReq {
  cdKey: string;
  deprecatedTestConfig: boolean;
}

export interface DeprecatedGetProductFromCdKeyRsp {
  result: DeprecatedGetProductFromCdKeyRsp_Result;
  product?: OwnedGame;
  productAssociations: OwnedGame[];
}

export enum DeprecatedGetProductFromCdKeyRsp_Result {
  Result_Success = 1,
  Result_BadCdKey = 2,
  Result_BannedKey = 3,
  Result_BannedForCdKeySpam = 4,
  Result_ServerError = 5,
  Result_UsedCdKeyOtherAccount = 6,
  Result_NotAvailableYet = 7,
  Result_NoLongerAvailable = 8,
  Result_NotAvailableInRegion = 9,
  Result_UsedCdKeyThisAccount = 10,
  UNRECOGNIZED = -1,
}

export interface RegisterOwnershipReq {
  productId: number;
  cdKey: string;
  deprecatedTestConfig: boolean;
}

export interface RegisterOwnershipByCdKeyReq {
  cdKey: string;
  deprecatedTestConfig: boolean;
  uplayId: number;
}

export interface RegisterOwnershipSteamPopReq {
  ticket: string[];
  confirm: boolean;
}

export interface RegisterOwnershipSteamPopRsp {
  result: RegisterOwnershipSteamPopRsp_Result;
  configuration: string[];
  ticketsClaimedByOther: string[];
}

export enum RegisterOwnershipSteamPopRsp_Result {
  Result_Success = 1,
  Result_InvalidTicket = 2,
  Result_TicketsAlreadyClaimed = 3,
  Result_NoPackagesFound = 4,
  UNRECOGNIZED = -1,
}

export interface RegisterOwnershipFromOculusReq {
  accessToken: string;
  oculusAppId: string;
  oculusUserId: string;
  userId: string;
}

export interface RegisterOwnershipFromOculusRsp {
  result: RegisterOwnershipFromOculusRsp_Result;
  claimedAccountId: string;
  ownedGames?: OwnedGames;
  ownedGamesContainer?: OwnedGamesContainer;
}

export enum RegisterOwnershipFromOculusRsp_Result {
  Result_Success = 1,
  Result_InvalidAccessToken = 2,
  Result_InvalidAppId = 3,
  Result_InvalidUserId = 4,
  Result_AlreadyClaimed = 5,
  Result_NoPackagesFound = 6,
  Result_ServerTimeout = 7,
  Result_NothingOwned = 8,
  Result_UnknownFailure = 9,
  Result_AddOwnershipFailure = 10,
  UNRECOGNIZED = -1,
}

export interface RegisterOwnershipFromWeGameReq {
  jsonWebToken: string;
}

export interface RegisterOwnershipFromWeGameRsp {
  result: RegisterOwnershipFromWeGameRsp_Result;
  ownedGames?: OwnedGames;
  ownedGamesContainer?: OwnedGamesContainer;
}

export enum RegisterOwnershipFromWeGameRsp_Result {
  Result_Success = 1,
  Result_InvalidToken = 2,
  Result_ServerError = 3,
  Result_UnknownProduct = 4,
  Result_NotAvailable = 5,
  Result_ServerTimeout = 6,
  UNRECOGNIZED = -1,
}

export interface RegisterOwnershipRsp {
  result: RegisterOwnershipRsp_Result;
  ownedGamesContainer?: OwnedGamesContainer;
  ownedGames?: OwnedGames;
  bannedTime: number;
  cdkeyClaimedDate: string;
}

export enum RegisterOwnershipRsp_Result {
  Result_Success = 1,
  Result_BadCdKey = 2,
  Result_BannedKey = 3,
  Result_BannedForCdKeySpam = 4,
  Result_ServerError = 5,
  Result_UsedCdKeyOtherAccount = 6,
  Result_OutOfKeys = 7,
  Result_NotAvailableYet = 8,
  Result_NoLongerAvailable = 9,
  Result_NotAvailableInRegion = 10,
  Result_UsedCdKeyThisAccount = 11,
  UNRECOGNIZED = -1,
}

export interface ClaimKeystorageKeyReq {
  productIds: number[];
}

export interface ClaimKeystorageKeyRsp {
  result: ClaimKeystorageKeyRsp_Result;
  productKeyPairs: ClaimKeystorageKeyRsp_ProductKeyPair[];
}

export enum ClaimKeystorageKeyRsp_Result {
  Result_Success = 1,
  Result_Failure = 2,
  UNRECOGNIZED = -1,
}

export interface ClaimKeystorageKeyRsp_ProductKeyPair {
  productId: number;
  cdKey: string;
}

export interface GetBatchDownloadUrlsReq {
  urlRequests: GetBatchDownloadUrlsReq_UrlRequest[];
}

export interface GetBatchDownloadUrlsReq_UrlRequest {
  productId: number;
  relativeFilePaths: string[];
  deprecatedTestConfig: boolean;
}

export interface GetBatchDownloadUrlsRsp {
  urlResponses: GetBatchDownloadUrlsRsp_UrlResponse[];
  ttlSeconds: number;
}

export enum GetBatchDownloadUrlsRsp_Result {
  Result_Success = 1,
  Result_ProductNotOwned = 2,
  UNRECOGNIZED = -1,
}

export interface GetBatchDownloadUrlsRsp_UrlResponse {
  result: GetBatchDownloadUrlsRsp_Result;
  deprecatedDownloadUrls: string[];
  downloadUrls: GetBatchDownloadUrlsRsp_DownloadUrls[];
}

export interface GetBatchDownloadUrlsRsp_DownloadUrls {
  urls: string[];
}

export interface DeprecatedGetLatestManifestsReq {
  deprecatedProductIds: number[];
  deprecatedTestConfig: boolean;
}

export interface DeprecatedGetLatestManifestsRsp {
  result: DeprecatedGetLatestManifestsRsp_Result;
  manifests: DeprecatedGetLatestManifestsRsp_Manifest[];
}

export enum DeprecatedGetLatestManifestsRsp_Result {
  Result_Success = 1,
  Result_ServerError = 2,
  UNRECOGNIZED = -1,
}

export interface DeprecatedGetLatestManifestsRsp_Manifest {
  result: DeprecatedGetLatestManifestsRsp_Manifest_Result;
  productId: number;
  manifest: string;
  deprecatedTestConfig: boolean;
}

export enum DeprecatedGetLatestManifestsRsp_Manifest_Result {
  Result_Success = 1,
  Result_NotFound = 2,
  UNRECOGNIZED = -1,
}

export interface GetProductConfigReq {
  productId: number;
  deprecatedTestConfig: boolean;
}

export interface GetProductConfigRsp {
  result: GetProductConfigRsp_Result;
  deprecatedTestConfig: boolean;
  configuration: string;
}

export enum GetProductConfigRsp_Result {
  Result_Success = 1,
  Result_NotFound = 2,
  Result_InternalServerError = 3,
  UNRECOGNIZED = -1,
}

export interface SwitchProductBranchReq {
  specifiedBranch?: SwitchProductBranchReq_SpecifiedProductBranch;
  defaultBranch?: SwitchProductBranchReq_DefaultProductBranch;
}

export interface SwitchProductBranchReq_SpecifiedProductBranch {
  productId: number;
  branchId: number;
  password: string;
}

export interface SwitchProductBranchReq_DefaultProductBranch {
  productId: number;
}

export interface SwitchProductBranchRsp {
  result: SwitchProductBranchRsp_Result;
  products?: OwnedGames;
}

export enum SwitchProductBranchRsp_Result {
  Result_Success = 1,
  Result_Denied = 2,
  UNRECOGNIZED = -1,
}

export interface UnlockProductBranchReq {
  branch?: UnlockProductBranchReq_ProductBranch;
}

export interface UnlockProductBranchReq_ProductBranch {
  productId: number;
  password: string;
}

export interface UnlockProductBranchRsp {
  result: UnlockProductBranchRsp_Result;
  branch: UnlockProductBranchRsp_ProductBranch[];
}

export enum UnlockProductBranchRsp_Result {
  Result_Success = 1,
  Result_Denied = 2,
  UNRECOGNIZED = -1,
}

export interface UnlockProductBranchRsp_ProductBranch {
  branchId: number;
  branchName: string;
}

export interface GetUplayPCTicketReq {
  uplayId: number;
  platform: GetUplayPCTicketReq_Platform;
}

export enum GetUplayPCTicketReq_Platform {
  Normal = 0,
  Luna = 1,
  GFN = 2,
  UNRECOGNIZED = -1,
}

export interface GetUplayPCTicketRsp {
  success: boolean;
  uplayPcTicket: string;
  errorCode: GetUplayPCTicketRsp_ErrorCode;
}

export enum GetUplayPCTicketRsp_ErrorCode {
  ErrorCode_Unknown = 1,
  ErrorCode_ProductNotOwned = 2,
  ErrorCode_ProductSuspended = 3,
  ErrorCode_ProductSubscriptionLocked = 4,
  ErrorCode_ProductNotReleased = 5,
  UNRECOGNIZED = -1,
}

export interface UplayCoreGameInitializedPush {
  success: boolean;
  productId: number;
}

export interface RetryUplayCoreInitializeReq {
  productId: number[];
  deprecatedTestConfig: boolean;
}

export interface ConsumeOwnershipReq {
  productId: number;
  quantity: number;
  transactionId: string;
  gameProductId: number;
  signature: string;
}

export interface ConsumeOwnershipRsp {
  result: ConsumeOwnershipRsp_Result;
  signature: string;
}

export enum ConsumeOwnershipRsp_Result {
  Result_Ok = 0,
  Result_NotEnoughItems = 1,
  Result_Failed = 2,
  UNRECOGNIZED = -1,
}

export interface GetGameTokenReq {
  activationToken: Buffer;
  productId: number;
}

export interface GetGameTokenRsp {
  result: GetGameTokenRsp_Result;
  gameToken: Buffer;
}

export enum GetGameTokenRsp_Result {
  Result_Success = 0,
  Result_NotOwned = 1,
  Result_Failure = 2,
  Result_ExceededActivations = 3,
  Result_TimeOut = 4,
  Result_ServerError = 5,
  UNRECOGNIZED = -1,
}

export interface GetGameTimeTicketReq {
  productId: number;
  requestTicket: Buffer;
}

export interface GetGameTimeTicketRsp {
  result: GetGameTimeTicketRsp_Result;
  timeTicket: Buffer;
}

export enum GetGameTimeTicketRsp_Result {
  Result_Success = 0,
  Result_NotOwned = 1,
  Result_Failure = 2,
  Result_TimeOut = 3,
  Result_ServerError = 4,
  UNRECOGNIZED = -1,
}

export interface GetGameWithdrawalRightsReq {
  productId: number;
}

export interface GetGameWithdrawalRightsRsp {
  success: boolean;
  withdrawalRights: boolean;
}

export interface WaiveGameWithdrawalRightsReq {
  productId: number;
}

export interface WaiveGameWithdrawalRightsRsp {
  success: boolean;
}

export interface SignOwnershipReq {
  productId: number;
}

export interface SignOwnershipRsp {
  success: boolean;
  branchId: number;
  expiration: number;
  signature: Buffer;
}

export interface OwnershipTokenReq {
  productId: number;
}

export interface OwnershipTokenRsp {
  success: boolean;
  token: string;
  expiration: number;
}

export interface RegisterTemporaryOwnershipReq {
  token: string;
}

export interface RegisterTemporaryOwnershipRsp {
  success: boolean;
  errorMsg: string;
  productIds: number[];
}

export interface Req {
  requestId: number;
  initializeReq?: InitializeReq;
  registerOwnershipReq?: RegisterOwnershipReq;
  registerOwnershipByCdKeyReq?: RegisterOwnershipByCdKeyReq;
  deprecatedGetProductFromCdKeyReq?: DeprecatedGetProductFromCdKeyReq;
  getProductConfigReq?: GetProductConfigReq;
  deprecatedGetLatestManifestsReq?: DeprecatedGetLatestManifestsReq;
  getBatchDownloadUrlsReq?: GetBatchDownloadUrlsReq;
  getUplayPcTicketReq?: GetUplayPCTicketReq;
  retryUplayCoreInitializeReq?: RetryUplayCoreInitializeReq;
  consumeOwnershipReq?: ConsumeOwnershipReq;
  switchProductBranchReq?: SwitchProductBranchReq;
  unlockProductBranchReq?: UnlockProductBranchReq;
  registerOwnershipSteamPopReq?: RegisterOwnershipSteamPopReq;
  registerOwnershipFromOculusReq?: RegisterOwnershipFromOculusReq;
  getGameTokenReq?: GetGameTokenReq;
  claimKeystorageKeyReq?: ClaimKeystorageKeyReq;
  getGameTimeTicketReq?: GetGameTimeTicketReq;
  getGameWithdrawalRightsReq?: GetGameWithdrawalRightsReq;
  waiveGameWithdrawalRightsReq?: WaiveGameWithdrawalRightsReq;
  signOwnershipReq?: SignOwnershipReq;
  registerOwnershipFromWegameReq?: RegisterOwnershipFromWeGameReq;
  ownershipTokenReq?: OwnershipTokenReq;
  registerTemporaryOwnershipReq?: RegisterTemporaryOwnershipReq;
}

export interface Rsp {
  requestId: number;
  initializeRsp?: InitializeRsp;
  registerOwnershipRsp?: RegisterOwnershipRsp;
  deprecatedGetProductFromCdKeyRsp?: DeprecatedGetProductFromCdKeyRsp;
  getProductConfigRsp?: GetProductConfigRsp;
  deprecatedGetLatestManifestsRsp?: DeprecatedGetLatestManifestsRsp;
  getBatchDownloadUrlsRsp?: GetBatchDownloadUrlsRsp;
  getUplayPcTicketRsp?: GetUplayPCTicketRsp;
  consumeOwnershipRsp?: ConsumeOwnershipRsp;
  switchProductBranchRsp?: SwitchProductBranchRsp;
  unlockProductBranchRsp?: UnlockProductBranchRsp;
  registerOwnershipSteamPopRsp?: RegisterOwnershipSteamPopRsp;
  registerOwnershipFromOculusRsp?: RegisterOwnershipFromOculusRsp;
  getGameTokenRsp?: GetGameTokenRsp;
  claimKeystorageKeyRsp?: ClaimKeystorageKeyRsp;
  getGameTimeTicketRsp?: GetGameTimeTicketRsp;
  getGameWithdrawalRightsRsp?: GetGameWithdrawalRightsRsp;
  waiveGameWithdrawalRightsRsp?: WaiveGameWithdrawalRightsRsp;
  signOwnershipRsp?: SignOwnershipRsp;
  registerOwnershipFromWegameRsp?: RegisterOwnershipFromWeGameRsp;
  ownershipTokenRsp?: OwnershipTokenRsp;
  registerTemporaryOwnershipRsp?: RegisterTemporaryOwnershipRsp;
}

export interface OwnedGamePush {
  ownedGamesContainer?: OwnedGamesContainer;
  ownedGames?: OwnedGames;
  removedProducts: number[];
}

export interface SubscriptionPush {
  subscriptionState: SubscriptionState;
  subscriptionType: number;
}

export interface Push {
  ownedGamePush?: OwnedGamePush;
  uplayCoreGameInitializedPush?: UplayCoreGameInitializedPush;
  subscriptionPush?: SubscriptionPush;
}

export interface Upstream {
  request?: Req;
}

export interface Downstream {
  response?: Rsp;
  push?: Push;
}
