import { CreateUserUseCaseInterface } from '../../domain/user/create-user.usecase.interface';
import { CreateUserPersistenceInterface } from './protocols/save-user.persistence.protocol';

export class CreateUserUseCase implements CreateUserUseCaseInterface {
  constructor(
    private readonly createUserPersistenceInterface: CreateUserPersistenceInterface,
  ) {}

  async create(input: { name: string }): Promise<void> {
    // other business logic

    const createUserPersistenceInput = {
      name: input.name,
    }
    await this.createUserPersistenceInterface.create(createUserPersistenceInput);
  }
}
