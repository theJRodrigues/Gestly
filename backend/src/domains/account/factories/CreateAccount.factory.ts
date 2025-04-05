import { 
  ICreateAccountUseCase, 
  CreateAccountUseCase, 
  CreateAccountRepository 
}from "@domains/account";

export class CreateAccountFactory {
  static make(): ICreateAccountUseCase {
    const repository = new CreateAccountRepository();
    const useCase = new CreateAccountUseCase(repository);
    return useCase;
  }
}