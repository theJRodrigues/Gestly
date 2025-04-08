import { ICreateCustomerRepository, CustomerDTO } from "@domains/customer";
import {CustomerModel} from "@infrastructure/MongoDB";

export class CreateCustomerRepository implements ICreateCustomerRepository {
  async findByCPF(cpf: string): Promise<CustomerDTO | null> {
    const isFound = await CustomerModel.findOne({ cpf });
    return isFound
  }
  async findByEmail(email: string): Promise<CustomerDTO | null> {
    const isFound = await CustomerModel.findOne({ email });
    return isFound
  }

  async create(customer: CustomerDTO): Promise<CustomerDTO> {
    const createCustomer = await CustomerModel.create(customer);
    return createCustomer;
  }
}
