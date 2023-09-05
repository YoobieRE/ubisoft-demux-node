/* eslint-disable */

export const protobufPackage = "mg.protocol.chat_message_data";

export interface GameSession {
  id: number;
  gameSessionData: Buffer;
  joinable: boolean;
}

export interface GameInvite {
  multiplayerId: number;
  productName: string;
  gameSession?: GameSession | undefined;
  inviterUsername: string;
}

export interface GroupInvitation {
  inviterId: string;
  inviteeId: string;
  inviterUsername: string;
  inviteeUsername: string;
}

export interface GroupCancelInvite {
  inviterId: string;
  inviteeId: string;
  inviterUsername: string;
  inviteeUsername: string;
}

export interface GroupJoin {
  joinedUserId: string;
  username: string;
}

export interface GroupLeft {
  leftUserId: string;
  username: string;
}

export interface GroupNotification {
  groupId: string;
  groupInvitation?: GroupInvitation | undefined;
  groupJoin?: GroupJoin | undefined;
  groupLeft?: GroupLeft | undefined;
  groupCancelInvite?: GroupCancelInvite | undefined;
}

export interface ChatMessageData {
  gameInvite?: GameInvite | undefined;
  groupNotification?: GroupNotification | undefined;
}
