import {
  ICreateCustomerRepository,
  CustomerWithoutId,
} from "../../../controllers/customers/create/protocols";
import Customer, { ICustomer } from "../../../models/Customer";

export class CreateCustomerRepository implements ICreateCustomerRepository {
  async createCustomer(customer: CustomerWithoutId): Promise<ICustomer> {
    const createCustomer = await Customer.create(customer);
    return createCustomer;
  }
}
