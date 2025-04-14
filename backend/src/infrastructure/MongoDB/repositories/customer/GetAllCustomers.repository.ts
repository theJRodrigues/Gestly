import { Customer, IGetAllCustomersRepository } from "@domains/customer";
import { CustomerModel } from "@infrastructure/MongoDB";

export class GetAllCustomersRepository implements IGetAllCustomersRepository {
  
  async get(accountId: string): Promise<Customer[]> {
    const getCustomers = await CustomerModel.find({ accountIdRef: accountId });
    const customers = getCustomers.map((customer) => new Customer(customer.toObject()));
    return customers;
  }
}
