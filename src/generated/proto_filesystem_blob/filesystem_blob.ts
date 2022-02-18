/* eslint-disable */
export const protobufPackage = 'mg.protocol.filesystem_blob';

export interface File {
  name: string;
  content: Buffer;
}

export interface Directory {
  name: string;
  directories: Directory[];
  files: File[];
}
