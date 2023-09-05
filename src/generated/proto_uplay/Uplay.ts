/* eslint-disable */

export const protobufPackage = "mg.protocol.uplay";

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
  product?: Product | undefined;
  achievements?: Achievements | undefined;
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
  achievementBlob?: AchievementBlob | undefined;
}

export interface WriteAchievementsRsp {
}

export interface ReadAchievementsReq {
  userId: string;
  product?: Product | undefined;
}

export interface ReadAchievementsRsp {
  userId: string;
  achievementBlob?: AchievementBlob | undefined;
}

export interface Req {
  requestId: number;
  authenticateReq?: AuthenticateReq | undefined;
  readAchievementsReq?: ReadAchievementsReq | undefined;
  writeAchievementsReq?: WriteAchievementsReq | undefined;
}

export interface Rsp {
  requestId: number;
  authenticateRsp?: AuthenticateRsp | undefined;
  readAchievementsRsp?: ReadAchievementsRsp | undefined;
  writeAchievementsRsp?: WriteAchievementsRsp | undefined;
}
