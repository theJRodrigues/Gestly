import { GetAllCustomersRepository } from "@infrastructure/MongoDB";
import { GetAllCustomersUseCase } from "@domains/customer";

export class GetAllCustomersFactory {
  static make() {
    const repository = new GetAllCustomersRepository();
    const useCase = new GetAllCustomersUseCase(repository);
    return useCase;  
  }
}