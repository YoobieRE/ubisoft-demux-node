/* eslint-disable */

export const protobufPackage = "mg.protocol.party";

export enum PartyReqResult {
  PartyReqResult_Ok = 1,
  PartyReqResult_Failed = 2,
  PartyReqResult_PartyFull = 3,
  UNRECOGNIZED = -1,
}

export interface Party {
  partyId: number;
  partyMembers: PartyMember[];
}

export interface ReconnectInfo {
  reconnectOk: boolean;
  party?: Party | undefined;
}

export interface StartSessionReq {
  cookie: number;
}

export interface StartSessionRsp {
  cookie: number;
  reconnectInfo?: ReconnectInfo | undefined;
}

export interface User {
  accountId: string;
}

export interface Guest {
  nick: string;
}

export interface GameSessionRemoved {
}

export interface UserDataRemoved {
}

export interface GuestRemoved {
}

export interface GameSession {
  uplayId: number;
  gameSessionId: number;
  gameSessionIdV2: string;
  gameSessionData: Buffer;
  joinable: boolean;
  size: number;
  maxSize: number;
}

export interface PartyMember {
  user?: User | undefined;
  status: PartyMember_Status;
  gameSession?: GameSession | undefined;
  gameSessionRemoved?: GameSessionRemoved | undefined;
  guest?: Guest | undefined;
  guestRemoved?: GuestRemoved | undefined;
  partyOwner: boolean;
  userData: Buffer;
  userDataRemoved?: UserDataRemoved | undefined;
}

export enum PartyMember_Status {
  Invited = 1,
  Member = 2,
  Offline = 3,
  UNRECOGNIZED = -1,
}

export interface PartyUpdate {
  left: User[];
  added: PartyMember[];
  updated: PartyMember[];
}

export interface PartyInviteReq {
  usersToInvite: User[];
  uplayId: string;
  productName: string;
  chatChannelId: number;
  maxPartySize: number;
  guest?: Guest | undefined;
  userData: Buffer;
  gameSession?: GameSession | undefined;
}

export interface PartyInviteRsp {
  ok: boolean;
  party?: Party | undefined;
}

export interface LeaveReq {
}

export interface LeaveRsp {
  ok: boolean;
}

export interface PartyInviteResponseReq {
  partyId: number;
  response: PartyInviteResponseReq_Response;
  guest?: Guest | undefined;
  userData: Buffer;
  gameSession?: GameSession | undefined;
}

export enum PartyInviteResponseReq_Response {
  Accept = 1,
  Decline = 2,
  UNRECOGNIZED = -1,
}

export interface PartyInviteResponseRsp {
  result: PartyReqResult;
  party?: Party | undefined;
}

export interface PromoteToLeaderReq {
  user?: User | undefined;
}

export interface PromoteToLeaderRsp {
  ok: boolean;
}

export interface SetUserDataReq {
  userData: Buffer;
}

export interface SetUserDataRsp {
  ok: boolean;
}

export interface GameSessionInviteReq {
}

export interface GameSessionInviteRsp {
  ok: boolean;
}

export interface SetInGameSessionReq {
  gameSession?: GameSession | undefined;
}

export interface SetInGameSessionRsp {
  ok: boolean;
}

export interface SetGuestReq {
  guest?: Guest | undefined;
}

export interface SetGuestRsp {
  result: PartyReqResult;
}

export interface ChatMessage {
  simpleTextMessage: string;
}

export interface ChatMessageReq {
  chatMessage?: ChatMessage | undefined;
}

export interface ChatMessageRsp {
  ok: boolean;
}

export interface Req {
  requestId: number;
  partyInviteReq?: PartyInviteReq | undefined;
  partyInviteResponseReq?: PartyInviteResponseReq | undefined;
  leaveReq?: LeaveReq | undefined;
  gameSessionInviteReq?: GameSessionInviteReq | undefined;
  setInGameSessionReq?: SetInGameSessionReq | undefined;
  setUserDataReq?: SetUserDataReq | undefined;
  promoteLeaderReq?: PromoteToLeaderReq | undefined;
  setGuestReq?: SetGuestReq | undefined;
  startSessionReq?: StartSessionReq | undefined;
  chatMessageReq?: ChatMessageReq | undefined;
}

export interface Rsp {
  requestId: number;
  partyInviteRsp?: PartyInviteRsp | undefined;
  partyInviteResponseRsp?: PartyInviteResponseRsp | undefined;
  leaveRsp?: LeaveRsp | undefined;
  gameSessionInviteRsp?: GameSessionInviteRsp | undefined;
  setInGameSessionRsp?: SetInGameSessionRsp | undefined;
  setUserDataRsp?: SetUserDataRsp | undefined;
  promoteLeaderRsp?: PromoteToLeaderRsp | undefined;
  setGuestRsp?: SetGuestRsp | undefined;
  startSessionRsp?: StartSessionRsp | undefined;
  chatMessageRsp?: ChatMessageRsp | undefined;
}

export interface PartyChangedPush {
  partyUpdate?: PartyUpdate | undefined;
}

export interface PartyInvitationPush {
  party?: Party | undefined;
  uplayId: string;
  productName: string;
  fromAccountId: string;
  chatChannelId: number;
}

export interface GameInvitePush {
  gameSession?: GameSession | undefined;
}

export interface ChatMessagePush {
  sender?: User | undefined;
  chatMessage?: ChatMessage | undefined;
}

export interface Push {
  partyChangedPush?: PartyChangedPush | undefined;
  partyInvitationPush?: PartyInvitationPush | undefined;
  gameInvitePush?: GameInvitePush | undefined;
  chatMessagePush?: ChatMessagePush | undefined;
}

export interface Upstream {
  request?: Req | undefined;
}

export interface Downstream {
  response?: Rsp | undefined;
  push?: Push | undefined;
}
