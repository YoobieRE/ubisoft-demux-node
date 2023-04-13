/* eslint-disable */

export const protobufPackage = "mg.protocol.game_catalog_extension";

export enum ProductAction {
  NonAction = 0,
  Download = 1,
  Launch = 2,
  Uninstall = 3,
  UNRECOGNIZED = -1,
}

export interface AuthDetails {
  tokenPlatform: AuthDetails_TokenPlatform;
  token: string;
}

export enum AuthDetails_TokenPlatform {
  Ubisoft = 0,
  XSTS = 1,
  UNRECOGNIZED = -1,
}

export interface InitializeReq {
  authDetails?: AuthDetails;
  doActivation: boolean;
}

export interface IdMappingElement {
  ubiProductId: number;
  msProductId: string;
}

export interface InitializeRsp {
  result: InitializeRsp_Result;
  idMapping: IdMappingElement[];
}

export enum InitializeRsp_Result {
  Failure = 0,
  Success = 1,
  AuthenticationFailed = 2,
  MissingOwnership = 3,
  UNRECOGNIZED = -1,
}

export interface LinkAccountReq {
  authDetails?: AuthDetails;
}

export interface LinkAccountRsp {
  isLinked: boolean;
}

export interface LaunchGameReq {
  productId: number;
  executableId: number;
}

export interface LaunchGameRsp {
  result: LaunchGameRsp_Result;
  reason: string;
}

export enum LaunchGameRsp_Result {
  InternalError = 0,
  Success = 1,
  UNRECOGNIZED = -1,
}

export interface GameRuntimeReq {
  launchGame?: LaunchGameReq | undefined;
}

export interface GameRuntimeRsp {
  launchGame?: LaunchGameRsp | undefined;
}

export interface GetProductActionsReq {
  productId: number;
}

export interface ProductActions {
  productId: number;
  actions: ProductAction[];
}

export interface GetProductActionsRsp {
  productActions?: ProductActions;
}

export interface GetLocalProductDetailsReq {
  productId: number;
}

export interface LocalProductDetails {
  productId: number;
  currentBytesOnDisc: number;
  installPath: string;
  patchState: LocalProductDetails_PatchState;
  installedDateSinceEpoch: number;
  lastPlayedDateSinceEpoch: number;
}

export enum LocalProductDetails_PatchState {
  Undefined = 0,
  FullyPatched = 1,
  PatchRequired = 2,
  UNRECOGNIZED = -1,
}

export interface GetLocalProductDetailsRsp {
  result: GetLocalProductDetailsRsp_Result;
  productDetails?: LocalProductDetails;
}

export enum GetLocalProductDetailsRsp_Result {
  Undefined = 0,
  Success = 1,
  NoDataAvailable = 2,
  UNRECOGNIZED = -1,
}

export interface StartGameDownloadReq {
  productId: number;
  installationPath: string;
  addons: number[];
  locales: string[];
  mainLocale: string;
  acceptedLicensesIds: number[];
}

export interface StartGameDownloadRsp {
  result: StartGameDownloadRsp_Result;
  reason: string;
}

export enum StartGameDownloadRsp_Result {
  Undefined = 0,
  Success = 1,
  Aborted = 2,
  FailedGenericError = 10,
  FailedDownloadNotPermitted = 11,
  FailedDownloadPermissionsNotAvailable = 12,
  FailedOwnershipTokenNotAvailable = 13,
  UNRECOGNIZED = -1,
}

export interface UninstallProductReq {
  productId: number;
}

export interface UninstallProductRsp {
  result: UninstallProductRsp_Result;
}

export enum UninstallProductRsp_Result {
  InternalError = 0,
  Success = 1,
  UNRECOGNIZED = -1,
}

export interface PauseProductReq {
  productId: number;
}

export interface PauseProductRsp {
  result: PauseProductRsp_Result;
}

export enum PauseProductRsp_Result {
  InternalError = 0,
  Success = 1,
  UNRECOGNIZED = -1,
}

export interface ProductManagementReq {
  getProductActions?: GetProductActionsReq | undefined;
  getLocalProductDetails?: GetLocalProductDetailsReq | undefined;
  startGameDownload?: StartGameDownloadReq | undefined;
  uninstallProduct?: UninstallProductReq | undefined;
  pauseProduct?: PauseProductReq | undefined;
}

export interface ProductManagementRsp {
  getProductActions?: GetProductActionsRsp | undefined;
  getLocalProductDetails?: GetLocalProductDetailsRsp | undefined;
  startGameDownload?: StartGameDownloadRsp | undefined;
  uninstallProduct?: UninstallProductRsp | undefined;
  pauseProduct?: PauseProductRsp | undefined;
}

export interface ProductActionsUpdated {
  productId: number;
  actions: ProductAction[];
}

export interface ProductDownloadStarted {
  productId: number;
}

export interface ProductDownloadUpdated {
  productId: number;
  downloadedBytes: number;
  totalBytes: number;
  requiredBytes: number;
  bytesPerSecond: number;
}

export interface ProductDownloadCompleted {
  productId: number;
  result: ProductDownloadCompleted_Result;
}

export enum ProductDownloadCompleted_Result {
  Undefined = 0,
  Completed = 1,
  Paused = 2,
  Cancelled = 3,
  Failed = 4,
  UNRECOGNIZED = -1,
}

export interface ProductUninstallStarted {
  productId: number;
}

export interface ProductUninstallCompleted {
  productId: number;
  result: ProductUninstallCompleted_Result;
}

export enum ProductUninstallCompleted_Result {
  Undefined = 0,
  Completed = 1,
  Failed = 2,
  UNRECOGNIZED = -1,
}

export interface GameLaunched {
  productId: number;
}

export interface GameEnded {
  productId: number;
}

export interface Req {
  requestId: number;
  initialize?: InitializeReq | undefined;
  gameRunTime?: GameRuntimeReq | undefined;
  productManagement?: ProductManagementReq | undefined;
  linkAccount?: LinkAccountReq | undefined;
}

export interface Rsp {
  requestId: number;
  initialize?: InitializeRsp | undefined;
  gameRunTime?: GameRuntimeRsp | undefined;
  productManagement?: ProductManagementRsp | undefined;
  linkAccount?: LinkAccountRsp | undefined;
}

export interface Push {
  gameLaunched?: GameLaunched | undefined;
  gameEnded?: GameEnded | undefined;
  productActionsUpdated?: ProductActionsUpdated | undefined;
  productDownloadStarted?: ProductDownloadStarted | undefined;
  productDownloadUpdated?: ProductDownloadUpdated | undefined;
  productDownloadCompleted?: ProductDownloadCompleted | undefined;
  productUninstallStarted?: ProductUninstallStarted | undefined;
  productUninstallCompleted?: ProductUninstallCompleted | undefined;
}

export interface Upstream {
  req?: Req;
}

export interface Downstream {
  rsp?: Rsp | undefined;
  push?: Push | undefined;
}
