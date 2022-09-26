/* eslint-disable */

export const protobufPackage = "mg.protocol.conversations_cache";

export enum ConversationsCacheVersion {
  ConversationsCacheVersion_Default = 2,
  UNRECOGNIZED = -1,
}

export interface ConversationsCache {
  version: number;
  channelIds: string[];
}
