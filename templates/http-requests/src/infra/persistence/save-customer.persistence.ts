import { HttpPostGateway } from './protocols/http-post.gateway.protocol';
import { HttpPostRequest } from '../../domain/http/http.type';
import { CreateUserPersistenceInterface } from '../../application/usecase/protocols/save-user.persistence.protocol';

interface CreateUserHttpPostRequest extends HttpPostRequest {
  url: 'https://jsonplaceholder.typicode.com/posts';
  body: { name: string };
  headers: {
    'Content-type': 'application/json; charset=UTF-8';
  };
}

export class CreateUserPersistence implements CreateUserPersistenceInterface {
  constructor(private readonly httpPostGateway: HttpPostGateway) {}

  async create(input: { name: string }): Promise<void> {
    const createUserHttpPostRequest: CreateUserHttpPostRequest = {
      url: 'https://jsonplaceholder.typicode.com/posts',
      body: {
        name: input.name,
      },
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    };

    await this.httpPostGateway.post<string>(createUserHttpPostRequest);
  }
}
