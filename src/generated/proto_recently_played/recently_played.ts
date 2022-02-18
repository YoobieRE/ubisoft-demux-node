/* eslint-disable */
export const protobufPackage = 'mg.protocol.recently_played';

export interface GameSessionInfo {
  productId: number;
  sessionEndedTimestamp: number;
}

export interface RecentlyPlayedGames {
  games: GameSessionInfo[];
}
