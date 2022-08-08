export const addLengthPrefix = (data: Uint8Array): Buffer => {
  const lengthPrefix = Buffer.alloc(4);
  lengthPrefix.writeUint32BE(data.length);
  return Buffer.concat([lengthPrefix, data]);
};

export const stripLengthPrefix = (data: Buffer): Buffer => {
  return data.subarray(4);
};

export const promiseTimeout = <T>(
  timeoutMs: number,
  promise: Promise<T>,
  error?: Error
): Promise<T> => {
  let timeout: NodeJS.Timeout;
  const timeoutPromise = new Promise((_, reject) => {
    timeout = setTimeout(
      () => reject(error || new Error(`Timed out after ${timeoutMs} ms`)),
      timeoutMs
    );
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

/**
 * Generates the single character path parameter in the Akamai CDN calls
 * @param hash A file SHA from the game manifest
 * @returns a single character 0-9a-v to preceed the hash in the CDN path
 */
export const fileHashToPathChar = (hash: string): string => {
  const base32Def = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
  ];
  const [firstChar, secondChar] = hash;
  const reversedValue = Buffer.from(`${secondChar}${firstChar}`, 'hex').readUInt8();
  const isEven = reversedValue % 2 === 0;
  const offset = Math.floor(reversedValue / 16);
  const halfOffset = isEven ? 0 : 16;
  return base32Def[offset + halfOffset];
};
