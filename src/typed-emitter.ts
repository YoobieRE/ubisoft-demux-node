import type TypedEmitter from 'typed-emitter';
import type { EventMap } from 'typed-emitter';
import EventEmitter from 'events';

export class BaseEmitter<T extends EventMap> extends (EventEmitter as {
  new <U extends EventMap>(): TypedEmitter<U>;
})<T> {}
