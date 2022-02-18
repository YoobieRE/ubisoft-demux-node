/* eslint-disable */
export const protobufPackage = 'mg.protocol.playtime_cache';

export interface PlaytimeItem {
  productId: number;
  secondsBuffer: number;
}

export interface PlaytimeCache {
  version: number;
  playtimes: PlaytimeItem[];
}
