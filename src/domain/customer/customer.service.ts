import { EventDispatcher } from "../@share/events/event-dispatcher.interface";
import { CustomerEntity } from "./customer.entity";
import { CustomerCreatedEventPayload } from "./events/created/customer-created.event.payload";
import { CustomerCreatedErrorEventPayload } from "./events/created/customer-created-error.event.payload";

export class CustomerService {

  constructor(private readonly eventDispatcher: EventDispatcher) {}

  async createCustomer(customerData: { name: string; email: string; }) {
    const customer = new CustomerEntity(
      Math.random().toString(),
      customerData.name,
      customerData.email,
      new Date(),
    );

    try {
      // generate a random number and if it is odd, throw an error
      const randomNumber = Math.floor(Math.random() * 10);
      if (randomNumber % 2 === 0) {
        throw new Error('Random number is odd');
      }

      const eventPayload = new CustomerCreatedEventPayload({
        id: customer.id,
        email: customer.email,
        name: customer.name,
      });

      this.eventDispatcher.dispatch(eventPayload);

      return customer;
    } catch (error) {
      const eventPayload = new CustomerCreatedErrorEventPayload({
        id: customer.id,
        email: customer.email,
        name: customer.name,
      });

      this.eventDispatcher.dispatch(eventPayload);

      throw error;
    }
  }
}