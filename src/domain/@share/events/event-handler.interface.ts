import { EventPayload } from "./event-payload.interface";

export interface EventHandler<T extends EventPayload = EventPayload> {
  handle(event: T): void
}
