import { GetAllCustomersRepository, ValidateExistAccountService } from "@infrastructure/MongoDB";
import { GetAllCustomersUseCase } from "@domains/customer";

export class GetAllCustomersFactory {
  static make() {
    const repository = new GetAllCustomersRepository();
    const validateAccount = new ValidateExistAccountService()
    const useCase = new GetAllCustomersUseCase(repository, validateAccount);
    return useCase;  
  }
}