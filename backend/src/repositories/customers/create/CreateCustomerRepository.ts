import { ICreateCustomerRepository, CreateCustomerDTO } from "@protocols";
import Customer, { ICustomer } from "@shared/models/Customer";

export class CreateCustomerRepository implements ICreateCustomerRepository {
  async existsByCPF(customer: CreateCustomerDTO): Promise<boolean> {
    const isCreated = await Customer.findOne({ cpf: customer.cpf });
    return !!isCreated;
  }

  async existsByEmail(customer: CreateCustomerDTO): Promise<boolean> {
    const isCreated = await Customer.findOne({ email: customer.email });
    return !!isCreated;
  }

  async create(customer: CreateCustomerDTO): Promise<ICustomer> {
    const createCustomer = await Customer.create(customer);
    return createCustomer;
  }
}
