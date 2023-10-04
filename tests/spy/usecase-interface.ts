export interface CreateUserUseCaseInterface {
  execute: (
    input: CreateUserUseCaseInterface.Input,
  ) => Promise<CreateUserUseCaseInterface.Output>;
}

export namespace CreateUserUseCaseInterface {
  export type Input = {
    name: string;
    email: string;
  };
  export type Output = {
    id: string;
    name: string;
    email: string;
  };
}
