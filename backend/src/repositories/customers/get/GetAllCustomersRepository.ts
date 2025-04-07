import { IGetAllCustomersRepository } from "protocols/customer/getAll.protocol";
import Customer, {
  ICustomer,
} from "@infrastructure/MongoDB/models/Customer.model";

export class GetAllCustomersRepository implements IGetAllCustomersRepository {
  async getAll(): Promise<ICustomer[]> {
    const allCustomers = await Customer.find();
    return allCustomers;
  }
}
