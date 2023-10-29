import { AllEventDispatcher } from "./domain/@share/events/event.dispatcher";
import SendConsoleLogEventHandler from "./domain/customer/events/created/send-console-log.handler";
import SendConsoleLogErrorEventHandler from "./domain/customer/events/created/send-console-error.handler";
import { CustomerService } from "./domain/customer/customer.service";

const eventDispatcher = new AllEventDispatcher();
const sendConsoleLogEventHandler = new SendConsoleLogEventHandler();
const sendConsoleLogErrorEventHandler = new SendConsoleLogErrorEventHandler();
eventDispatcher.subscribe('customer.created', sendConsoleLogEventHandler);
eventDispatcher.subscribe('customer.created.error', sendConsoleLogErrorEventHandler);

const customerService = new CustomerService(eventDispatcher)
customerService.createCustomer({ name: 'kelps', email: 'kelps@mail' })
