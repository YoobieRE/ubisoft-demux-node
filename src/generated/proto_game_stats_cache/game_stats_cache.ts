/* eslint-disable */
export const protobufPackage = 'mg.protocol.game_stats_cache';

export interface GameStatsCard {
  spaceId: string;
  json: string;
}

export interface GameStatsCache {
  version: number;
  playerStatsCards: GameStatsCard[];
  communityStatsCards: GameStatsCard[];
}
