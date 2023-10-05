import { CreateUserUseCase } from './application/usecase/create-user.persistence';
import { FetchHttpPostGateway } from './infra/http/fetch-http-post.gateway';
import { CreateUserPersistence } from './infra/persistence/save-customer.persistence';

const httpPostGateway = new FetchHttpPostGateway();
const createUserPersistence = new CreateUserPersistence(httpPostGateway);
const createUserUseCase = new CreateUserUseCase(createUserPersistence);

createUserUseCase.create({ name: 'John Doe' }).then(() => {
  console.log('User created');
});
