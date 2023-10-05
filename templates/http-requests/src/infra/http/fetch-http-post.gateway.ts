import { HttpPostRequest } from '../../domain/http/http.type';
import { HttpPostGateway } from '../persistence/protocols/http-post.gateway.protocol';

export class FetchHttpPostGateway implements HttpPostGateway {
  async post<O = any>(request: HttpPostRequest): Promise<O> {
    const url = new URL(request.url);
    const query = request.query || {};
    for (const key in query) {
      url.searchParams.append(key, query[key]);
    }

    const response = await fetch(url.toString(), {
      method: 'POST',
      body: JSON.stringify(request.body || {}),
      headers: request.headers || {},
    });
    const data: O = await response.json();
    return data;
  }
}
