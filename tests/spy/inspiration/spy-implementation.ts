import { Spy } from "./spy-interface";

interface AddUser {
  execute (params: AddUser.Params): Promise<AddUser.result>;
}

namespace AddUser {
  export type Params = {
    name: string;
    email: string;
  };
  export type result = {
    id: string;
    name: string;
    email: string;
  };
}

const makeAddUserResult = () => ({
  id: 'any_id',
  name: 'any_name',
  email: 'any_email',
}); 

class AddUserSpy implements AddUser, Spy<any, any> {
  result: AddUser.result = makeAddUserResult();
  count: number = 0;
  params: AddUser.Params;
  returnError: boolean = false;
  returnNull: boolean = false;
  error: Error = new Error();

  async execute(params: AddUser.Params): Promise<AddUser.result> {
    this.count++;
    this.params = params;

    if (this.returnError) throw this.error;
    if (this.returnNull) return null;

    return await Promise.resolve(this.result);
  }
}
