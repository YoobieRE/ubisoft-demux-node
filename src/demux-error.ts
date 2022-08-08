import type { demux } from './generated';

export class DemuxError extends Error {
  request: demux.Upstream;

  constructor(request: demux.Upstream) {
    super('The Demux request received no response and timed out');
    // 👇️ because we are extending a built-in class
    Object.setPrototypeOf(this, DemuxError.prototype);

    this.request = request;
  }
}
