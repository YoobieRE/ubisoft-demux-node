/* eslint-disable @typescript-eslint/no-explicit-any */
export class DemuxError extends Error {
  request: Record<string, any>;

  constructor(request: Record<string, any>) {
    super('The Demux request received no response and timed out');
    // 👇️ because we are extending a built-in class
    Object.setPrototypeOf(this, DemuxError.prototype);

    this.request = request;
  }
}
