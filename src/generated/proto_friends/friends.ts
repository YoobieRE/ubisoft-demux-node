/* eslint-disable */

export const protobufPackage = "mg.protocol.friends";

export interface ReconnectInfo {
  reconnectSuccess: boolean;
}

export interface DeprecatedInitializeReq {
  ubiToken: Buffer;
  deprecatedCookie: number;
  game?: Game;
  richPresenceDeprecated: Buffer;
  activityStatus: Status_ActivityStatus;
  ubiTicket: string;
  protoVersion: number;
  localization: string;
  isStaging: boolean;
}

export interface DeprecatedInitializeRsp {
  success: boolean;
  deprecatedCookie: number;
  deprecatedReconnectInfo?: ReconnectInfo;
  relationship: Relationship[];
}

export interface InitializeReq {
  protoVersion: number;
  game?: Game;
  activityStatus: Status_ActivityStatus;
  ubiTicket: string;
  localization: string;
  isStaging: boolean;
  sessiondId: string;
}

export interface InitializeRsp {
  success: boolean;
  relationship: Relationship[];
}

export interface Friend {
  accountId: string;
  nameOnPlatform: string;
  nickname: string;
  isFavorite: boolean;
}

export interface DeprecatedFriendsNick {
  user?: Friend;
  nick: string;
}

export interface Relationship {
  blacklisted: boolean;
  friend?: Friend;
  relation: Relationship_Relation;
  deprecatedChangeId: number;
  changeDate: string;
}

export enum Relationship_Relation {
  NoRelationship = 0,
  PendingSentInvite = 1,
  PendingReceivedInvite = 2,
  Friends = 3,
  UNRECOGNIZED = -1,
}

export interface Game {
  uplayId: number;
  productName: string;
  gameSession?: GameSession;
}

export interface GameSession {
  gameSessionId: number;
  gameSessionIdV2: string;
  gameSessionData: Buffer;
  joinable: boolean;
  size: number;
  maxSize: number;
}

export interface SetGameReq {
  game?: Game;
}

export interface SetGameRsp {
  success: boolean;
}

export interface RichPresenceTokenPair {
  key: string;
  val: string;
}

export interface RichPresenceState {
  productId: number;
  presenceId: number;
  presenceTokens: RichPresenceTokenPair[];
}

export interface SetRichPresenceReqDeprecated {
  richPresenceDeprecated: Buffer;
}

export interface SetRichPresenceRspDeprecated {
  success: boolean;
}

export interface SetRichPresenceReq {
  presenceState?: RichPresenceState;
}

export interface SetRichPresenceRsp {
  success: boolean;
  localizedRichPresence: string;
}

export interface SetActivityStatusReq {
  activityStatus: Status_ActivityStatus;
}

export interface SetActivityStatusRsp {
  success: boolean;
}

export interface Status {
  user?: Friend;
  onlineStatus: Status_OnlineStatus;
  game?: Game;
  richPresenceDeprecated: Buffer;
  voipStatus: Status_VoipStatus;
  activityStatus: Status_ActivityStatus;
  localizedRichPresence: string;
}

export enum Status_OnlineStatus {
  Offline = 0,
  Online = 1,
  InGame = 2,
  UNRECOGNIZED = -1,
}

export enum Status_VoipStatus {
  Deprecated1 = 0,
  Deprecated2 = 1,
  Deprecated3 = 2,
  UNRECOGNIZED = -1,
}

export enum Status_ActivityStatus {
  Normal = 0,
  Away = 1,
  Busy = 2,
  Invisible = 3,
  UNRECOGNIZED = -1,
}

export interface GetRelationshipsListReq {
}

export interface GetRelationshipsListRsp {
  relationship: Relationship[];
  ok: boolean;
}

export interface FindFriendReq {
  searchQueryUsername: string;
  email: string;
}

export interface FindFriendRsp {
  alternatives: Friend[];
  ok: boolean;
}

export interface GetStatusReq {
  users: Friend[];
}

export interface GetStatusRsp {
  statuses: Status[];
  ok: boolean;
}

export interface DeprecatedGetNickReq {
  users: Friend[];
}

export interface DeprecatedGetNickRsp {
  nicks: DeprecatedFriendsNick[];
  ok: boolean;
}

export interface AcceptFriendshipReq {
  user?: Friend;
}

export interface AcceptFriendshipRsp {
  ok: boolean;
}

export interface GetBlacklistReq {
  user: string;
}

export interface GetBlacklistRsp {
  success: boolean;
  blacklist: string[];
}

export interface AddToBlacklistReq {
  user?: Friend;
}

export interface AddToBlacklistRsp {
  ok: boolean;
}

export interface ClearRelationshipReq {
  user?: Friend;
}

export interface ClearRelationshipRsp {
  ok: boolean;
}

export interface DeclineFriendshipReq {
  user?: Friend;
}

export interface DeclineFriendshipRsp {
  ok: boolean;
}

export interface RemoveFromBlacklistReq {
  user?: Friend;
}

export interface RemoveFromBlacklistRsp {
  ok: boolean;
}

export interface RequestFriendshipReq {
  user?: Friend;
}

export interface RequestFriendshipRsp {
  ok: boolean;
}

export interface RequestFriendshipsReq {
  users: Friend[];
}

export interface RequestFriendshipsRsp {
  ok: boolean[];
}

export interface JoinGameInvite {
  accountIdFrom: string;
  game?: Game;
  deprecatedProductName: string;
}

export interface JoinGameInvitationReq {
  accountIdTo: string;
  game?: Game;
  deprecatedProductName: string;
}

export interface JoinGameInvitationRsp {
  ok: boolean;
}

export interface DeclineGameInviteReq {
  accountId: string;
}

export interface DeclineGameInviteRsp {
  success: boolean;
}

export interface UbiTicketRefreshReq {
  ubiTicket: string;
}

export interface UbiTicketRefreshRsp {
  success: boolean;
}

export interface SetNicknameReq {
  accountId: string;
  nickname: string;
}

export interface SetNicknameRsp {
  success: boolean;
}

export interface Req {
  requestId: number;
  deprecatedInitializeReq?: DeprecatedInitializeReq;
  deprecatedGetRelationshipsListReq?: GetRelationshipsListReq;
  acceptFriendshipReq?: AcceptFriendshipReq;
  addToBlacklistReq?: AddToBlacklistReq;
  clearRelationshipReq?: ClearRelationshipReq;
  declineFriendshipReq?: DeclineFriendshipReq;
  removeFromBlacklistReq?: RemoveFromBlacklistReq;
  deprecatedRequestFriendshipReq?: RequestFriendshipReq;
  findFriendReq?: FindFriendReq;
  deprecatedGetStatusReq?: GetStatusReq;
  getNickReq?: DeprecatedGetNickReq;
  setGameReq?: SetGameReq;
  joinGameInvitationReq?: JoinGameInvitationReq;
  setRichPresenceReqDeprecated?: SetRichPresenceReqDeprecated;
  requestFriendshipsReq?: RequestFriendshipsReq;
  setActivityStatusReq?: SetActivityStatusReq;
  setRichPresenceReq?: SetRichPresenceReq;
  declineGameInviteReq?: DeclineGameInviteReq;
  ubiTicketRefreshReq?: UbiTicketRefreshReq;
  initializeReq?: InitializeReq;
  setNicknameReq?: SetNicknameReq;
  getBlacklistReq?: GetBlacklistReq;
}

export interface Rsp {
  requestId: number;
  deprecatedInitializeRsp?: DeprecatedInitializeRsp;
  deprecatedGetRelationshipsListRsp?: GetRelationshipsListRsp;
  acceptFriendshipRsp?: AcceptFriendshipRsp;
  addToBlacklistRsp?: AddToBlacklistRsp;
  clearRelationshipRsp?: ClearRelationshipRsp;
  declineFriendshipRsp?: DeclineFriendshipRsp;
  removeFromBlacklistRsp?: RemoveFromBlacklistRsp;
  deprecatedRequestFriendshipRsp?: RequestFriendshipRsp;
  findFriendRsp?: FindFriendRsp;
  deprecatedGetStatusRsp?: GetStatusRsp;
  getNickRsp?: DeprecatedGetNickRsp;
  setGameRsp?: SetGameRsp;
  joinGameInvitationRsp?: JoinGameInvitationRsp;
  setRichPresenceRspDeprected?: SetRichPresenceRspDeprecated;
  requestFriendshipsRsp?: RequestFriendshipsRsp;
  setActivityStatusRsp?: SetActivityStatusRsp;
  setRichPresenceRsp?: SetRichPresenceRsp;
  declineGameInviteRsp?: DeclineGameInviteRsp;
  ubiTicketRefreshRsp?: UbiTicketRefreshRsp;
  initializeRsp?: InitializeRsp;
  setNicknameRsp?: SetNicknameRsp;
  getBlacklistRsp?: GetBlacklistRsp;
}

export interface PushUpdatedRelationship {
  relationship?: Relationship;
}

export interface PushUpdatedStatus {
  updatesStatus?: Status;
  isInitialStatus: boolean;
}

export interface PushJoinGameInvitation {
  invite?: JoinGameInvite;
}

export interface PushRecentlyMetPlayers {
  uplayId: number;
  accountIds: string[];
}

export interface PushGameInviteDeclined {
  accountId: string;
}

export interface PushNicknameUpdate {
  friendAccountId: string;
  nickname: string;
}

export interface PushIsFavoriteUpdate {
  friendAccountId: string;
  isFavorite: boolean;
}

export interface Push {
  pushUpdatedRelationship?: PushUpdatedRelationship;
  pushUpdatedStatus?: PushUpdatedStatus;
  pushJoinGameInvitation?: PushJoinGameInvitation;
  pushRecentlyMetPlayers?: PushRecentlyMetPlayers;
  pushGameInviteDeclined?: PushGameInviteDeclined;
  pushNicknameUpdate?: PushNicknameUpdate;
  pushIsFavoriteUpdate?: PushIsFavoriteUpdate;
}

export interface Upstream {
  request?: Req;
}

export interface Downstream {
  response?: Rsp;
  push?: Push;
}
