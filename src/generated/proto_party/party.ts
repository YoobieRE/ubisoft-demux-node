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
  party?: Party;
}

export interface StartSessionReq {
  cookie: number;
}

export interface StartSessionRsp {
  cookie: number;
  reconnectInfo?: ReconnectInfo;
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
  user?: User;
  status: PartyMember_Status;
  gameSession?: GameSession;
  gameSessionRemoved?: GameSessionRemoved;
  guest?: Guest;
  guestRemoved?: GuestRemoved;
  partyOwner: boolean;
  userData: Buffer;
  userDataRemoved?: UserDataRemoved;
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
  guest?: Guest;
  userData: Buffer;
  gameSession?: GameSession;
}

export interface PartyInviteRsp {
  ok: boolean;
  party?: Party;
}

export interface LeaveReq {
}

export interface LeaveRsp {
  ok: boolean;
}

export interface PartyInviteResponseReq {
  partyId: number;
  response: PartyInviteResponseReq_Response;
  guest?: Guest;
  userData: Buffer;
  gameSession?: GameSession;
}

export enum PartyInviteResponseReq_Response {
  Accept = 1,
  Decline = 2,
  UNRECOGNIZED = -1,
}

export interface PartyInviteResponseRsp {
  result: PartyReqResult;
  party?: Party;
}

export interface PromoteToLeaderReq {
  user?: User;
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
  gameSession?: GameSession;
}

export interface SetInGameSessionRsp {
  ok: boolean;
}

export interface SetGuestReq {
  guest?: Guest;
}

export interface SetGuestRsp {
  result: PartyReqResult;
}

export interface ChatMessage {
  simpleTextMessage: string;
}

export interface ChatMessageReq {
  chatMessage?: ChatMessage;
}

export interface ChatMessageRsp {
  ok: boolean;
}

export interface Req {
  requestId: number;
  partyInviteReq?: PartyInviteReq;
  partyInviteResponseReq?: PartyInviteResponseReq;
  leaveReq?: LeaveReq;
  gameSessionInviteReq?: GameSessionInviteReq;
  setInGameSessionReq?: SetInGameSessionReq;
  setUserDataReq?: SetUserDataReq;
  promoteLeaderReq?: PromoteToLeaderReq;
  setGuestReq?: SetGuestReq;
  startSessionReq?: StartSessionReq;
  chatMessageReq?: ChatMessageReq;
}

export interface Rsp {
  requestId: number;
  partyInviteRsp?: PartyInviteRsp;
  partyInviteResponseRsp?: PartyInviteResponseRsp;
  leaveRsp?: LeaveRsp;
  gameSessionInviteRsp?: GameSessionInviteRsp;
  setInGameSessionRsp?: SetInGameSessionRsp;
  setUserDataRsp?: SetUserDataRsp;
  promoteLeaderRsp?: PromoteToLeaderRsp;
  setGuestRsp?: SetGuestRsp;
  startSessionRsp?: StartSessionRsp;
  chatMessageRsp?: ChatMessageRsp;
}

export interface PartyChangedPush {
  partyUpdate?: PartyUpdate;
}

export interface PartyInvitationPush {
  party?: Party;
  uplayId: string;
  productName: string;
  fromAccountId: string;
  chatChannelId: number;
}

export interface GameInvitePush {
  gameSession?: GameSession;
}

export interface ChatMessagePush {
  sender?: User;
  chatMessage?: ChatMessage;
}

export interface Push {
  partyChangedPush?: PartyChangedPush;
  partyInvitationPush?: PartyInvitationPush;
  gameInvitePush?: GameInvitePush;
  chatMessagePush?: ChatMessagePush;
}

export interface Upstream {
  request?: Req;
}

export interface Downstream {
  response?: Rsp;
  push?: Push;
}
