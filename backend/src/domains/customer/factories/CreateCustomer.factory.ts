import { ValidateExistAccountServiceFactory } from "@domains/account";
import { CreateCustomerUseCase } from "@domains/customer";
import { CreateCustomerRepository } from "@infrastructure/MongoDB";

export class CreateCustomerFactory{
    static make(){
        const service = ValidateExistAccountServiceFactory.make();
        const repository = new CreateCustomerRepository();
        const useCase = new CreateCustomerUseCase(repository, service);

        return useCase;
    }
}