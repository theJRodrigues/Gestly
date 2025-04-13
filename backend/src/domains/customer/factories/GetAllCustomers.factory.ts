import { GetAllCustomersRepository } from "@infrastructure/MongoDB";
import { GetAllCustomersUseCase } from "@domains/customer";
import { ValidateExistAccountServiceFactory } from "@domains/account";

export class GetAllCustomersFactory {
  static make() {
    const repository = new GetAllCustomersRepository();
    const service = ValidateExistAccountServiceFactory.make()
    const useCase = new GetAllCustomersUseCase(repository, service);
    return useCase;  
  }
}