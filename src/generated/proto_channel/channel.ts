/* eslint-disable */

export const protobufPackage = "mg.channel";

export enum ResponseCode {
  ResponseCode_Success = 200,
  ResponseCode_BadRequest = 400,
  ResponseCode_Unauthorized = 401,
  ResponseCode_Forbidden = 403,
  ResponseCode_NotFound = 404,
  ResponseCode_InternalServerError = 500,
  ResponseCode_GatewayTimeout = 504,
  UNRECOGNIZED = -1,
}

export enum Permission {
  Permission_SendMessages = 1,
  Permission_ManageChannel = 2,
  Permission_ViewChannel = 3,
  Permission_ManageMessages = 4,
  Permission_CreateInvite = 5,
  Permission_KickMembers = 6,
  Permission_BanMembers = 7,
  Permission_ChangeTopic = 8,
  SuperUser_DeleteChannel = 50,
  UNRECOGNIZED = -1,
}

export enum ChannelType {
  ChannelType_None = 0,
  ChannelType_DM = 1,
  ChannelType_Group = 2,
  ChannelType_Party = 3,
  UNRECOGNIZED = -1,
}

export enum MessageType {
  MessageType_Default = 0,
  MessageType_UserJoined = 1,
  MessageType_UserLeft = 2,
  MessageType_GameInvite = 3,
  MessageType_UserInvite = 4,
  MessageType_ChannelNameChange = 5,
  UNRECOGNIZED = -1,
}

export interface Channel {
  id: string;
  parentId: string;
  type: ChannelType;
  name: string;
  topic: string;
  recipients: string[];
  ownerId: string;
  applicationId: string;
}

export interface Message {
  messageId: string;
  parentId: string;
  channelId: string;
  authorId: string;
  textMessage: string;
  time: number;
  updatedTimestamp: number;
  type: MessageType;
  mentions: string[];
}

export interface Invite {
  id: string;
  channelId: string;
  senderId: string;
  receiverId: string;
  channel?: Channel | undefined;
}

export interface CreateChannelReq {
  parentId: string;
  type: ChannelType;
  name: string;
  topic: string;
  applicationId: string;
}

export interface CreateChannelRsp {
  responseCode: ResponseCode;
  channel?: Channel | undefined;
}

export interface CreatePrivateChannelReq {
  withUserId: string;
}

export interface CreatePrivateChannelRsp {
  responseCode: ResponseCode;
  channel?: Channel | undefined;
}

export interface GetChannelByIdReq {
  channelId: string;
}

export interface GetChannelByIdRsp {
  responseCode: ResponseCode;
  channel?: Channel | undefined;
}

export interface LeaveChannelReq {
  channelId: string;
}

export interface LeaveChannelRsp {
  responseCode: ResponseCode;
}

export interface DeleteChannelReq {
  channelId: string;
}

export interface DeleteChannelRsp {
  responseCode: ResponseCode;
}

export interface UpdateChannelReq {
  channel?: Channel | undefined;
}

export interface UpdateChannelRsp {
  responseCode: ResponseCode;
}

export interface GetChannelsByUserIdReq {
}

export interface GetChannelsByUserIdRsp {
  responseCode: ResponseCode;
  channels: Channel[];
}

export interface CreateInviteReq {
  channelId: string;
  receiverId: string[];
}

export interface CreateInviteRsp {
  responseCode: ResponseCode;
  invites: Invite[];
}

export interface GetInvitesSentReq {
}

export interface GetInvitesSentRsp {
  responseCode: ResponseCode;
  invites: Invite[];
}

export interface GetInvitesReceivedReq {
}

export interface GetInvitesReceivedRsp {
  responseCode: ResponseCode;
  invites: Invite[];
}

export interface AcceptInviteReq {
  inviteId: string;
  channelId: string;
}

export interface AcceptInviteRsp {
  responseCode: ResponseCode;
  channelId: string;
}

export interface DeleteInviteReq {
  inviteId: string;
}

export interface DeleteInviteRsp {
  responseCode: ResponseCode;
}

export interface SendMessageReq {
  message?: Message | undefined;
}

export interface SendMessageRsp {
  responseCode: ResponseCode;
  message?: Message | undefined;
}

export interface GetMessageReq {
  channelId: string;
  olderThanMessageId: string;
}

export interface GetMessageRsp {
  responseCode: ResponseCode;
  messages: Message[];
  messagesLeft: boolean;
}

export interface EditMessageReq {
  channelId: string;
  messageId: string;
  textMessage: string;
}

export interface EditMessageRsp {
  responseCode: ResponseCode;
  message?: Message | undefined;
}

export interface DeleteMessageReq {
  channelId: string;
  messageId: string;
}

export interface DeleteMessageRsp {
  responseCode: ResponseCode;
}

export interface AckMessageReq {
  channelId: string;
  messageId: string;
}

export interface AckMessageRsp {
  responseCode: ResponseCode;
}

export interface GetUnreadMessagesReq {
}

export interface GetUnreadMessagesRsp {
  responseCode: ResponseCode;
  lastAcknowledgedMessage: { [key: string]: string };
  mostRecentMessageInChannel: { [key: string]: string };
}

export interface GetUnreadMessagesRsp_LastAcknowledgedMessageEntry {
  key: string;
  value: string;
}

export interface GetUnreadMessagesRsp_MostRecentMessageInChannelEntry {
  key: string;
  value: string;
}

export interface PrivateChannelCreatedEvent {
  channel?: Channel | undefined;
}

export interface ChannelUpdatedEvent {
  channel?: Channel | undefined;
}

export interface ChannelDeletedEvent {
  channelId: string;
}

export interface InviteCreatedEvent {
  invite?: Invite | undefined;
}

export interface InviteRevokedEvent {
  inviteId: string;
}

export interface MessageCreatedEvent {
  message?: Message | undefined;
}

export interface MessageUpdatedEvent {
  channelId: string;
  channelType: ChannelType;
  message?: Message | undefined;
}

export interface MessageDeletedEvent {
  channelId: string;
  channelType: ChannelType;
  messageId: string;
}

export interface Req {
  requestId: number;
  createChannelReq?: CreateChannelReq | undefined;
  getChannelByIdReq?: GetChannelByIdReq | undefined;
  leaveChannelReq?: LeaveChannelReq | undefined;
  deleteChannelReq?: DeleteChannelReq | undefined;
  updateChannelReq?: UpdateChannelReq | undefined;
  getChannelsByUserIdReq?: GetChannelsByUserIdReq | undefined;
  createInviteReq?: CreateInviteReq | undefined;
  getInvitesSentReq?: GetInvitesSentReq | undefined;
  getInvitesReceivedReq?: GetInvitesReceivedReq | undefined;
  acceptInviteReq?: AcceptInviteReq | undefined;
  deleteInviteReq?: DeleteInviteReq | undefined;
  sendMessageReq?: SendMessageReq | undefined;
  getMessageReq?: GetMessageReq | undefined;
  editMessageReq?: EditMessageReq | undefined;
  deleteMessageReq?: DeleteMessageReq | undefined;
  ackMessageReq?: AckMessageReq | undefined;
  createPrivateChannelReq?: CreatePrivateChannelReq | undefined;
  getUnreadMessagesReq?: GetUnreadMessagesReq | undefined;
}

export interface Rsp {
  requestId: number;
  createChannelRsp?: CreateChannelRsp | undefined;
  getChannelByIdRsp?: GetChannelByIdRsp | undefined;
  leaveChannelRsp?: LeaveChannelRsp | undefined;
  deleteChannelRsp?: DeleteChannelRsp | undefined;
  updateChannelRsp?: UpdateChannelRsp | undefined;
  getChannelsByUserIdRsp?: GetChannelsByUserIdRsp | undefined;
  createInviteRsp?: CreateInviteRsp | undefined;
  getInvitesSentRsp?: GetInvitesSentRsp | undefined;
  getInvitesReceivedRsp?: GetInvitesReceivedRsp | undefined;
  acceptInviteRsp?: AcceptInviteRsp | undefined;
  deleteInviteRsp?: DeleteInviteRsp | undefined;
  sendMessageRsp?: SendMessageRsp | undefined;
  getMessageRsp?: GetMessageRsp | undefined;
  editMessageRsp?: EditMessageRsp | undefined;
  deleteMessageRsp?: DeleteMessageRsp | undefined;
  ackMessageRsp?: AckMessageRsp | undefined;
  createPrivateChannelRsp?: CreatePrivateChannelRsp | undefined;
  getUnreadMessagesRsp?: GetUnreadMessagesRsp | undefined;
}

export interface Event {
  sequenceNumber: number;
  channelUpdatedEvent?: ChannelUpdatedEvent | undefined;
  channelDeletedEvent?: ChannelDeletedEvent | undefined;
  messageCreatedEvent?: MessageCreatedEvent | undefined;
  messageUpdatedEvent?: MessageUpdatedEvent | undefined;
  messageDeletedEvent?: MessageDeletedEvent | undefined;
  inviteCreatedEvent?: InviteCreatedEvent | undefined;
  inviteRevokedEvent?: InviteRevokedEvent | undefined;
  privateChannelCreatedEvent?: PrivateChannelCreatedEvent | undefined;
}

export interface Upstream {
  req?: Req | undefined;
}

export interface Downstream {
  rsp?: Rsp | undefined;
  event?: Event | undefined;
}

export interface ChannelService {
  CreateChannel(request: CreateChannelReq): Promise<CreateChannelRsp>;
}
