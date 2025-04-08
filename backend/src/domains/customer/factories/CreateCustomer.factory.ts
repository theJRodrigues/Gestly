import { CreateCustomerUseCase } from "@domains/customer";
import { CreateCustomerRepository } from "@infrastructure/MongoDB";

export class CreateCustomerFactory{
    static make(){
        const repository = new CreateCustomerRepository();
        const useCase = new CreateCustomerUseCase(repository);

        return useCase;
    }
}