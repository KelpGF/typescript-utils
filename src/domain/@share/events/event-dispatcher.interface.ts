import { EventHandler } from "./event-handler.interface";
import { EventPayload } from "./event-payload.interface";

export interface EventDispatcher {
  subscribe(eventName: string, handler: EventHandler): void;
  dispatch<T>(event: EventPayload<T>): Promise<any>;
}
