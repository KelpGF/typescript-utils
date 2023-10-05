import axios from 'axios'

import { HttpGetRequest } from '../../domain/http/http.type';
import { HttpGetGateway } from '../persistence/protocols/http-get.gateway.protocol';

export class axiosHttpGetGateway implements HttpGetGateway {
  async get<O = any>(request: HttpGetRequest): Promise<O> {
    const response = await axios.get<O>(request.url, {
      headers: request.headers || {},
      params: request.query || {},
    });

    return response.data;
  }
}
