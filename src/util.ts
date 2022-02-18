export const addLengthPrefix = (data: Uint8Array): Buffer => {
  const lengthPrefix = Buffer.alloc(4);
  lengthPrefix.writeUint32BE(data.length);
  return Buffer.concat([lengthPrefix, data]);
};

export const stripLengthPrefix = (data: Buffer): Buffer => {
  return data.subarray(4);
};

export const promiseTimeout = <T>(timeoutMs: number, promise: Promise<T>): Promise<T> => {
  let timeout: NodeJS.Timeout;
  const timeoutPromise = new Promise((_, reject) => {
    timeout = setTimeout(() => reject(new Error(`Timed out after ${timeoutMs} ms`)), timeoutMs);
  });

  return Promise.race([
    promise.then((res) => {
      // Cancel timeout to prevent open handles
      clearTimeout(timeout);
      return res;
    }),
    timeoutPromise,
  ]) as Promise<T>;
};
