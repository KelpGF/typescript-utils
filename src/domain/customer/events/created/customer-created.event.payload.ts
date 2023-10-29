import { CustomerEventPayload, DefaultCustomerEventsData } from "../customer.event.payload";

export class CustomerCreatedEventPayload extends CustomerEventPayload {
  constructor(data: DefaultCustomerEventsData) {
    super(data.id, data.email, data.name, 'customer.created');
  }
}
