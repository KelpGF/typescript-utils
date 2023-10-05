import { HttpGetRequest } from '../../../domain/http/http.type';

export interface HttpGetGateway<R extends HttpGetRequest = HttpGetRequest> {
  get<O = any>(request: R): Promise<O>;
}
