import { CreateUserUseCaseInterface } from './usecase-interface';
import { mockCreateUserUseCaseOutput } from './mocks';
import { SpyAbstract } from './spy';

export class CreateUserUseCaseStub
  extends SpyAbstract<
    CreateUserUseCaseInterface.Input,
    CreateUserUseCaseInterface.Output
  >
  implements CreateUserUseCaseInterface
{
  constructor(error?: Error) {
    super(mockCreateUserUseCaseOutput(), error);
  }

  async execute(input: CreateUserUseCaseInterface.Input) {
    return this.call(input);
  }
}
