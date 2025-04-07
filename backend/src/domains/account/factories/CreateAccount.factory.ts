import { 
  ICreateAccountUseCase, 
  CreateAccountUseCase, 
}from "@domains/account";

import {CreateAccountRepository} from '@infrastructure/database/MongoDB'
export class CreateAccountFactory {
  static make(): ICreateAccountUseCase {
    const repository = new CreateAccountRepository();
    const useCase = new CreateAccountUseCase(repository);
    return useCase;
  }
}