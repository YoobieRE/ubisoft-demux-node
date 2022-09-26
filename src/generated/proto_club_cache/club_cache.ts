/* eslint-disable */

export const protobufPackage = "mg.protocol.club_cache";

export enum ClubCacheVersion {
  ClubCacheVersion_Default = 1,
  UNRECOGNIZED = -1,
}

export interface ClubCompletedActions {
  gameId: number;
  actionIds: string[];
}

export interface ClubCache {
  version: number;
  completedActions: ClubCompletedActions[];
}
