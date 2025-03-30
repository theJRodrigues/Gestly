import { IGetAllCustomersRepository } from "@controllers/customers/get/all/protocols";
import Customer, { ICustomer } from "@models/Customer";


export class GetAllCustomersRepository implements IGetAllCustomersRepository {
  async getAll(): Promise<ICustomer[]> {
    const allCustomers = await Customer.find();
    return allCustomers;
  }
}
