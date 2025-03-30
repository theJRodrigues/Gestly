import {
  ICreateCustomerRepository,
  CustomerWithoutId,
} from "@controllers/customers/create/protocols";
import Customer, { ICustomer } from "@models/Customer";

export class CreateCustomerRepository implements ICreateCustomerRepository {
  async validateExistingCustomerWithCPF(
    customer: CustomerWithoutId
  ): Promise<boolean> {
    const isCreatedByCPF = await Customer.findOne({ cpf: customer.cpf });
    return !!isCreatedByCPF;
  }

  async validateExistingWithEmail(
    customer: CustomerWithoutId
  ): Promise<boolean> {
    const isCreatedByEmail = await Customer.findOne({ email: customer.email });
    return !!isCreatedByEmail;
  }

  async createCustomer(customer: CustomerWithoutId): Promise<ICustomer> {
    const createCustomer = await Customer.create(customer);
    return createCustomer;
  }
}
