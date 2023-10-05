import { HttpPostRequest } from '../../../domain/http/http.type';

export interface HttpPostGateway<R extends HttpPostRequest = HttpPostRequest> {
  post<O>(request: R): Promise<O>;
}
