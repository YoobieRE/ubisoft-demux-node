/* eslint-disable */

export const protobufPackage = "mg.protocol.game_activations_cache";

export interface ExecutableToken {
  exeIndex: number;
  gameToken: string;
}

export interface GameActivation {
  productId: number;
  executableToken: ExecutableToken[];
}

export interface GameActivationListCache {
  gameActivation: GameActivation[];
}
