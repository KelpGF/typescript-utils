export interface CreateUserPersistenceInterface {
  create(input: { name: string }): Promise<void>;
}
