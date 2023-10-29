export interface EventPayload<T = any> {
  eventName: string;
  dateTimeOccurred: Date;
  data: T;
}
