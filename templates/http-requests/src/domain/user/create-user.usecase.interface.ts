export interface CreateUserUseCaseInterface {
  create(input: { name: string }): Promise<void>;
}
