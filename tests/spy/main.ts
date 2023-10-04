import { CreateUserUseCaseInterface } from './usecase-interface';
import { mockCreateUserUseCaseInput } from './mocks';
import { CreateUserUseCaseStub } from './stub';

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCaseInterface) {}

  async handle(input: { data: any }) {
    const result = await this.createUserUseCase.execute(
      'kelps' as any,
    );

    return result;
  }
}

async function test() {
  const createUserUseCaseStub = new CreateUserUseCaseStub();
  const createUserController = new CreateUserController(
    createUserUseCaseStub,
  );
  const input = { data: mockCreateUserUseCaseInput() };
  const result1 = await createUserController.handle(input);
  console.log({
    mustBeenCalledWith: input.data,
    calledWith: createUserUseCaseStub.calledWith(),
  })

  // createUserUseCaseStub.outputThrowError();
  // const result3 = await createUserUseCaseStub
  //   .execute(mockCreateUserUseCaseInput())
  //   .catch((error) => error);

  // console.log({
  //   result1,
  //   result3,
  //   count: createUserUseCaseStub.timesCalled(),
  // });
}

test();

// run typescript file in terminal
// npx ts-node main.ts
