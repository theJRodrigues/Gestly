import { ICreateCustomerRepository, Customer } from "@domains/customer";
import {CustomerModel} from "@infrastructure/MongoDB";

export class CreateCustomerRepository implements ICreateCustomerRepository {
  async findByCPF(cpf: string): Promise<Customer | null> {
    const isFound = await CustomerModel.findOne({ cpf });
    const customer = isFound ? new Customer(isFound.toObject()) : null;
    return customer
  }
  async findByEmail(email: string): Promise<Customer | null> {
    const isFound = await CustomerModel.findOne({email: {$eq: email}});
    const customer = isFound ? new Customer(isFound.toObject()) : null;
    return customer
  }

  async create(customer: Customer): Promise<Customer> {
    const createCustomer = await CustomerModel.create(customer);
    const newCustomer = new Customer(createCustomer.toObject());
    return newCustomer;
  }
}
