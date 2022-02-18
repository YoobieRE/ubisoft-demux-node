/* eslint-disable */
export const protobufPackage = 'mg.protocol.configuration';

export interface Configuration {
  productId: number;
  uplayId: number;
  configuration: string;
}

export interface ConfigurationCache {
  configurations: Configuration[];
}
