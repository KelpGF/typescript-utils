import { EventDispatcher } from "./event-dispatcher.interface";
import { EventHandler } from "./event-handler.interface";
import { EventPayload } from "./event-payload.interface";

export class AllEventDispatcher implements EventDispatcher {
  private handlersMap: Map<string, EventHandler[]> = new Map();

  subscribe(eventName: string, handler: EventHandler): void {
    const handlers = this.handlersMap.get(eventName) || [];
    handlers.push(handler);
    this.handlersMap.set(eventName, handlers);
  }

  async dispatch(event: EventPayload): Promise<void> {
    const handlers = this.handlersMap.get(event.eventName) || [];
    for (const handler of handlers) {
      handler.handle(event);
    }
  }
}