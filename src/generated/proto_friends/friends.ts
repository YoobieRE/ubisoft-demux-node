/* eslint-disable */

export const protobufPackage = "mg.protocol.friends";

export interface ReconnectInfo {
  reconnectSuccess: boolean;
}

export interface DeprecatedInitializeReq {
  ubiToken: Buffer;
  deprecatedCookie: number;
  game?: Game | undefined;
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
  deprecatedReconnectInfo?: ReconnectInfo | undefined;
  relationship: Relationship[];
}

export interface InitializeReq {
  protoVersion: number;
  game?: Game | undefined;
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
  user?: Friend | undefined;
  nick: string;
}

export interface Relationship {
  blacklisted: boolean;
  friend?: Friend | undefined;
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
  gameSession?: GameSession | undefined;
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
  game?: Game | undefined;
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
  presenceState?: RichPresenceState | undefined;
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
  user?: Friend | undefined;
  onlineStatus: Status_OnlineStatus;
  game?: Game | undefined;
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
  user?: Friend | undefined;
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
  user?: Friend | undefined;
}

export interface AddToBlacklistRsp {
  ok: boolean;
}

export interface ClearRelationshipReq {
  user?: Friend | undefined;
}

export interface ClearRelationshipRsp {
  ok: boolean;
}

export interface DeclineFriendshipReq {
  user?: Friend | undefined;
}

export interface DeclineFriendshipRsp {
  ok: boolean;
}

export interface RemoveFromBlacklistReq {
  user?: Friend | undefined;
}

export interface RemoveFromBlacklistRsp {
  ok: boolean;
}

export interface RequestFriendshipReq {
  user?: Friend | undefined;
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
  game?: Game | undefined;
  deprecatedProductName: string;
}

export interface JoinGameInvitationReq {
  accountIdTo: string;
  game?: Game | undefined;
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
  deprecatedInitializeReq?: DeprecatedInitializeReq | undefined;
  deprecatedGetRelationshipsListReq?: GetRelationshipsListReq | undefined;
  acceptFriendshipReq?: AcceptFriendshipReq | undefined;
  addToBlacklistReq?: AddToBlacklistReq | undefined;
  clearRelationshipReq?: ClearRelationshipReq | undefined;
  declineFriendshipReq?: DeclineFriendshipReq | undefined;
  removeFromBlacklistReq?: RemoveFromBlacklistReq | undefined;
  deprecatedRequestFriendshipReq?: RequestFriendshipReq | undefined;
  findFriendReq?: FindFriendReq | undefined;
  deprecatedGetStatusReq?: GetStatusReq | undefined;
  getNickReq?: DeprecatedGetNickReq | undefined;
  setGameReq?: SetGameReq | undefined;
  joinGameInvitationReq?: JoinGameInvitationReq | undefined;
  setRichPresenceReqDeprecated?: SetRichPresenceReqDeprecated | undefined;
  requestFriendshipsReq?: RequestFriendshipsReq | undefined;
  setActivityStatusReq?: SetActivityStatusReq | undefined;
  setRichPresenceReq?: SetRichPresenceReq | undefined;
  declineGameInviteReq?: DeclineGameInviteReq | undefined;
  ubiTicketRefreshReq?: UbiTicketRefreshReq | undefined;
  initializeReq?: InitializeReq | undefined;
  setNicknameReq?: SetNicknameReq | undefined;
  getBlacklistReq?: GetBlacklistReq | undefined;
}

export interface Rsp {
  requestId: number;
  deprecatedInitializeRsp?: DeprecatedInitializeRsp | undefined;
  deprecatedGetRelationshipsListRsp?: GetRelationshipsListRsp | undefined;
  acceptFriendshipRsp?: AcceptFriendshipRsp | undefined;
  addToBlacklistRsp?: AddToBlacklistRsp | undefined;
  clearRelationshipRsp?: ClearRelationshipRsp | undefined;
  declineFriendshipRsp?: DeclineFriendshipRsp | undefined;
  removeFromBlacklistRsp?: RemoveFromBlacklistRsp | undefined;
  deprecatedRequestFriendshipRsp?: RequestFriendshipRsp | undefined;
  findFriendRsp?: FindFriendRsp | undefined;
  deprecatedGetStatusRsp?: GetStatusRsp | undefined;
  getNickRsp?: DeprecatedGetNickRsp | undefined;
  setGameRsp?: SetGameRsp | undefined;
  joinGameInvitationRsp?: JoinGameInvitationRsp | undefined;
  setRichPresenceRspDeprected?: SetRichPresenceRspDeprecated | undefined;
  requestFriendshipsRsp?: RequestFriendshipsRsp | undefined;
  setActivityStatusRsp?: SetActivityStatusRsp | undefined;
  setRichPresenceRsp?: SetRichPresenceRsp | undefined;
  declineGameInviteRsp?: DeclineGameInviteRsp | undefined;
  ubiTicketRefreshRsp?: UbiTicketRefreshRsp | undefined;
  initializeRsp?: InitializeRsp | undefined;
  setNicknameRsp?: SetNicknameRsp | undefined;
  getBlacklistRsp?: GetBlacklistRsp | undefined;
}

export interface PushUpdatedRelationship {
  relationship?: Relationship | undefined;
}

export interface PushUpdatedStatus {
  updatesStatus?: Status | undefined;
  isInitialStatus: boolean;
}

export interface PushJoinGameInvitation {
  invite?: JoinGameInvite | undefined;
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
  pushUpdatedRelationship?: PushUpdatedRelationship | undefined;
  pushUpdatedStatus?: PushUpdatedStatus | undefined;
  pushJoinGameInvitation?: PushJoinGameInvitation | undefined;
  pushRecentlyMetPlayers?: PushRecentlyMetPlayers | undefined;
  pushGameInviteDeclined?: PushGameInviteDeclined | undefined;
  pushNicknameUpdate?: PushNicknameUpdate | undefined;
  pushIsFavoriteUpdate?: PushIsFavoriteUpdate | undefined;
}

export interface Upstream {
  request?: Req | undefined;
}

export interface Downstream {
  response?: Rsp | undefined;
  push?: Push | undefined;
}
