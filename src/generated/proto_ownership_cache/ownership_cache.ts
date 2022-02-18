/* eslint-disable */
export const protobufPackage = 'mg.protocol.ownership_cache';

export interface OwnedGame {
  productId: number;
  uplayId: number;
  downloadId: number;
  orbitId: number;
  cdKey: string;
  platform: number;
  productType: number;
  state: number;
  productAssociations: number[];
  gameCode: string;
  brandId: number;
  pendingKeystorageOwnership: boolean;
  legacySpaceId: string;
  legacyAppId: string;
  gameToken: string;
  activationIds: number[];
  targetPartner: OwnedGame_TargetPartner;
  activationType: OwnedGame_ActivationType;
  ubiServicesAppId: string;
}

export enum OwnedGame_TargetPartner {
  TargetPartner_None = 0,
  TargetPartner_EpicGames = 1,
  UNRECOGNIZED = -1,
}

export enum OwnedGame_ActivationType {
  ActivationType_Purchase = 0,
  ActivationType_Trial = 1,
  ActivationType_Subscription = 2,
  UNRECOGNIZED = -1,
}

export enum OwnedGame_PackageState {
  PackageState_Unavailable = 0,
  PackageState_PreReleased = 1,
  PackageState_PreDownloadable = 2,
  PackageState_Released = 3,
  PackageState_Expired = 4,
  UNRECOGNIZED = -1,
}

export interface OwnershipCache {
  ownedGames: OwnedGame[];
  productIds: number[];
}
