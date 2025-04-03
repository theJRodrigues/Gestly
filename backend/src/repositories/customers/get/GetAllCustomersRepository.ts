import { IGetAllCustomersRepository } from "protocols/customer/getAll.protocol";
import Customer, { ICustomer } from "@shared/models/Customer";

export class GetAllCustomersRepository implements IGetAllCustomersRepository {
  async getAll(): Promise<ICustomer[]> {
    const allCustomers = await Customer.find();
    return allCustomers;
  }
}
