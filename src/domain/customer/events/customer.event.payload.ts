import { EventPayload } from "../../@share/events/event-payload.interface";

export type DefaultCustomerEventsData = {
  id: string;
  name: string;
  email: string;
};

type CustomerEvents = 'customer.created' | 'customer.created.error';

export abstract class CustomerEventPayload implements EventPayload<DefaultCustomerEventsData> {
  eventName: string;
  data: {
    id: string;
    name: string;
    email: string;
  };
  dateTimeOccurred: Date;

  constructor(
    id: string,
    name: string,
    email: string,
    eventName: CustomerEvents,
  ) {
    this.eventName = eventName;
    this.data = {
      id,
      name,
      email,
    };
    this.dateTimeOccurred = new Date();
  }
}