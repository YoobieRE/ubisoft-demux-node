/* eslint-disable */
export const protobufPackage = 'mg.protocol.uplay';

export interface Achievement {
  achievementId: number;
  timestamp: number;
}

export interface Achievements {
  achievements: Achievement[];
}

export interface Product {
  productId: string;
  platformId: string;
}

export interface ProductAchievements {
  product?: Product;
  achievements?: Achievements;
}

export interface AchievementBlob {
  productAchievements: ProductAchievements[];
}

export interface AuthenticateReq {
  orbitToken: string;
}

export interface AuthenticateRsp {
  success: boolean;
}

export interface WriteAchievementsReq {
  achievementBlob?: AchievementBlob;
}

export interface WriteAchievementsRsp {}

export interface ReadAchievementsReq {
  userId: string;
  product?: Product;
}

export interface ReadAchievementsRsp {
  userId: string;
  achievementBlob?: AchievementBlob;
}

export interface Req {
  requestId: number;
  authenticateReq?: AuthenticateReq;
  readAchievementsReq?: ReadAchievementsReq;
  writeAchievementsReq?: WriteAchievementsReq;
}

export interface Rsp {
  requestId: number;
  authenticateRsp?: AuthenticateRsp;
  readAchievementsRsp?: ReadAchievementsRsp;
  writeAchievementsRsp?: WriteAchievementsRsp;
}
