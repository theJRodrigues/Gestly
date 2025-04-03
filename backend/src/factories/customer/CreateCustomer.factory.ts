import { CreateCustomerController } from "@controllers/index";
import { CreateCustomerRepository } from "@repositories/index";

export class CreateCustomerFactory{
    static make(){
        const repository = new CreateCustomerRepository();
        const controller = new CreateCustomerController(repository);

        return controller;
    }
}