/* eslint-disable */

export const protobufPackage = "mg.protocol.store";

export enum StoreProtocolVersion {
  ProtocolVersion = 3,
  UNRECOGNIZED = -1,
}

export enum StoreResult {
  StoreResponse_Success = 1,
  StoreResponse_Failure = 2,
  StoreResponse_ServerTimeOut = 3,
  StoreResponse_InvalidRequest = 4,
  StoreResponse_InvalidResponse = 5,
  StoreResponse_HttpQueueFull = 6,
  StoreResponse_HttpFailure = 7,
  StoreResponse_SalesPlatformFailure = 8,
  StoreResponse_SalesPlatformRedirect = 9,
  StoreResponse_SalesPlatformAntifraudReject = 10,
  UNRECOGNIZED = -1,
}

export enum StorePartner {
  StorePartner_Demandware = 0,
  StorePartner_Epicstore = 1,
  UNRECOGNIZED = -1,
}

export enum StoreType {
  StoreType_Upsell = 1,
  StoreType_Ingame = 2,
  UNRECOGNIZED = -1,
}

export enum SalesPlatform {
  SalesPlatform_Mercury = 1,
  SalesPlatform_Sigma = 2,
  UNRECOGNIZED = -1,
}

export interface StoreProduct {
  productId: number;
  configuration: Buffer;
  staging: boolean;
  storeReference: string;
  associations: number[];
  promotionScore: number;
  revision: number;
  credentials: string;
  ownershipAssociations: number[];
  userBlob: string;
  storePartner: StorePartner;
}

export interface StoreProductUpdateInfo {
  productId: number;
  revision: number;
  ownershipAssociations: number[];
}

export interface Storefront {
  configuration: string;
}

export interface InitializeReq {
  useStaging: boolean;
  protoVersion: number;
  /** @deprecated */
  clientIpOverride?: number;
}

export interface InitializeRsp {
  success: boolean;
  storefront?: Storefront | undefined;
}

export interface GetStoreReq {
}

export interface GetStoreRsp {
  result: StoreResult;
  storeProducts: StoreProduct[];
}

export interface StoreUpdatedPush {
  storeProducts: StoreProduct[];
  removedProducts: number[];
}

export interface GetDataReq {
  storeDataType: StoreType;
  productId: number[];
}

export interface GetDataRsp {
  result: StoreResult;
  storeDataType: StoreType;
  products: StoreProduct[];
}

export interface RevisionsUpdatedPush {
  storeDataType: StoreType;
  updateInfo: StoreProductUpdateInfo[];
  removedProducts: number[];
}

export interface IngameStoreCredentials {
  ubiTicket: string;
  ubiAppId: string;
  salesToken: string;
  salesPlatform: SalesPlatform;
}

export interface KeyValuePair {
  key: string;
  value: string;
}

export interface CheckoutReq {
  productId: string;
  priceCode: string;
  urlRedirectSuccess: string;
  urlRedirectFailure: string;
  languageCode: string;
  extra: KeyValuePair[];
  redirectLocale: string;
  partnerPlatformName: string;
}

export interface CheckoutRsp {
  url: string;
  newWindowFlag: boolean;
  redirectLocaleCode: string;
}

export interface IngameStoreCheckoutReq {
  ingameStoreCredentials?: IngameStoreCredentials | undefined;
  checkoutReq?: CheckoutReq | undefined;
}

export interface IngameStoreCheckoutRsp {
  result: StoreResult;
  checkoutRsp?: CheckoutRsp | undefined;
}

export interface Push {
  storeUpdate?: StoreUpdatedPush | undefined;
  revisionsUpdatedPush?: RevisionsUpdatedPush | undefined;
}

export interface Req {
  requestId: number;
  initializeReq?: InitializeReq | undefined;
  getStoreReq?: GetStoreReq | undefined;
  getDataReq?: GetDataReq | undefined;
  ingameStoreCheckoutReq?: IngameStoreCheckoutReq | undefined;
}

export interface Rsp {
  requestId: number;
  initializeRsp?: InitializeRsp | undefined;
  getStoreRsp?: GetStoreRsp | undefined;
  getDataRsp?: GetDataRsp | undefined;
  ingameStoreCheckoutRsp?: IngameStoreCheckoutRsp | undefined;
}

export interface Upstream {
  request?: Req | undefined;
}

export interface Downstream {
  response?: Rsp | undefined;
  push?: Push | undefined;
}
