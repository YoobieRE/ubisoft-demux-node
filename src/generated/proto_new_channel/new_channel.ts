/* eslint-disable */

export const protobufPackage = "uplay.channelservice.v1";

export enum ChannelType {
  CHANNEL_TYPE_UNSPECIFIED = 0,
  DM = 1,
  GROUP = 2,
  UNRECOGNIZED = -1,
}

export enum MembershipType {
  MEMBERSHIP_TYPE_UNSPECIFIED = 0,
  PENDING = 1,
  ACTIVE = 2,
  UNRECOGNIZED = -1,
}

export enum MessageType {
  MESSAGE_TYPE_UNSPECIFIED = 0,
  GAME_INVITE = 1,
  TEXT_MESSAGE = 2,
  USER_JOINED = 3,
  USER_LEFT = 4,
  USER_ADDED = 5,
  UNRECOGNIZED = -1,
}

export enum PlayerNotificationType {
  notification_type_unspecified = 0,
  upc_channel_metadata_updated = 1,
  upc_channel_created = 2,
  upc_channel_memberships_created = 3,
  upc_channel_membership_updated = 4,
  upc_channel_membership_deleted = 5,
  upc_channel_message_created = 6,
  upc_channel_message_updated = 7,
  upc_channel_message_deleted = 8,
  UNRECOGNIZED = -1,
}

export interface ChannelMetadata {
  name: string;
  topic: string;
}

export interface Channel {
  id: string;
  parentId: string;
  metadata?: ChannelMetadata | undefined;
  creatorId: string;
  spaceId: string;
  type: ChannelType;
  memberships: Membership[];
  lastMessageTime: string;
}

export interface Membership {
  channelId: string;
  profileId: string;
  membershipType: MembershipType;
  addedBy: string;
  createTime: string;
  updateTime: string;
}

export interface Message {
  id: string;
  parentId: string;
  channelId: string;
  authorId: string;
  textMessage: string;
  createTime: string;
  updateTime: string;
  type: MessageType;
  mentions: string[];
}

export interface MessageKey {
  id: string;
  authorId: string;
}

export interface GetChannelRequest {
  spaceId: string;
  channelId: string;
}

export interface CreateChannelRequest {
  spaceId: string;
  channel?: Channel | undefined;
  members: string[];
}

export interface UpdateChannelMetadataRequest {
  spaceId: string;
  channelId: string;
  channelMetadata?: ChannelMetadata | undefined;
}

export interface ListChannelsRequest {
  spaceId: string;
  offset: number;
  limit: number;
  membershipType: MembershipType;
}

export interface ListChannelsResponse {
  channels: Channel[];
  nextToken: string;
}

export interface CreateMembershipsRequest {
  spaceId: string;
  channelId: string;
  members: string[];
}

export interface CreateMembershipsResponse {
  memberships: Membership[];
}

export interface DeleteMembershipRequest {
  spaceId: string;
  channelId: string;
}

export interface UpdateMembershipRequest {
  spaceId: string;
  channelId: string;
  membership?: Membership | undefined;
}

export interface GetMessageRequest {
  spaceId: string;
  channelId: string;
  messageId: string;
}

export interface CreateMessageRequest {
  spaceId: string;
  channelId: string;
  message?: Message | undefined;
}

export interface DeleteMessageRequest {
  spaceId: string;
  channelId: string;
  messageId: string;
}

export interface UpdateMessageRequest {
  spaceId: string;
  channelId: string;
  messageId: string;
  message?: Message | undefined;
}

export interface ListMessagesRequest {
  spaceId: string;
  channelId: string;
  limit: number;
  pageToken: string;
  parentId: string;
}

export interface ListMessagesResponse {
  messages: Message[];
  nextToken: string;
}

export interface AckMessageRequest {
  spaceId: string;
  channelId: string;
  messageId: string;
}

export interface AckMessageResponse {
  channelId: string;
  messageId: string;
}

export interface GetAckMessageRequest {
  spaceId: string;
  channelId: string;
}

export interface GetAckMessageResponse {
  channelId: string;
  messageId: string;
}

export interface PlayerNotificationContent {
  channelId: string;
  profileId: string;
  messageId: string;
  metadata?: ChannelMetadata | undefined;
  channel?: Channel | undefined;
  membership?: Membership | undefined;
  memberships: Membership[];
  message?: Message | undefined;
}

export interface PlayerNotification {
  content?: PlayerNotificationContent | undefined;
  notificationType: PlayerNotificationType;
  profileId: string;
  spaceId: string;
}

export interface PlayerNotificationBatch {
  notifications: PlayerNotification[];
}
