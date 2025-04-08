import { ICreateCustomerRepository, CustomerDTO } from "@domains/customer";
import {CustomerModel} from "@infrastructure/MongoDB";

export class CreateCustomerRepository implements ICreateCustomerRepository {
  findByCPF(cpf: string): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  findByEmail(email: string): Promise<boolean> {
    throw new Error("Method not implemented.");
  }

  async create(customer: CustomerDTO): Promise<CustomerDTO> {
    const createCustomer = await CustomerModel.create(customer);
    return createCustomer;
  }
}
