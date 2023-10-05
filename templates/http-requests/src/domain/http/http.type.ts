export type RequestObjectsType = Record<string, string> | undefined;

export type HttpGetRequest<
  H extends RequestObjectsType = RequestObjectsType,
  Q extends RequestObjectsType = RequestObjectsType,
> = {
  url: string;
  headers?: H;
  query?: Q;
};

export type HttpPostRequest<
  B extends Record<string, any> = Record<string, any>,
  H extends RequestObjectsType = RequestObjectsType,
  Q extends RequestObjectsType = RequestObjectsType,
> = {
  url: string;
  body: B;
  headers?: H;
  query?: Q;
};
