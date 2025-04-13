import { CreateCustomerUseCase } from "@domains/customer";
import { CreateCustomerRepository, ValidateExistAccountService } from "@infrastructure/MongoDB";

export class CreateCustomerFactory{
    static make(){
        const repository = new CreateCustomerRepository();
        const validateService = new ValidateExistAccountService();
        const useCase = new CreateCustomerUseCase(repository, validateService);

        return useCase;
    }
}