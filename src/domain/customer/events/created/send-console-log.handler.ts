import { EventHandler } from "../../../@share/events/event-handler.interface";
import { CustomerEventPayload } from "../customer.event.payload";


export default class SendConsoleLogEventHandler implements EventHandler<CustomerEventPayload> {
  handle(event: CustomerEventPayload): void {
    const data = event.data;

    console.log(`Event: ${event.eventName} | Id: ${data.id}, Name: ${data.name}, Email: ${data.email} | DateTimeOccurred: ${event.dateTimeOccurred}`);
  }
}
