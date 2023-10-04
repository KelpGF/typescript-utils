export interface Spy<P, R> {
  count: number;
  params: P;
  returnError: boolean;
  returnNull: boolean;
  error: Error;
  result: R;
}
