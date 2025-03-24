import { IGetCustomersRepository } from "../../../controllers/customers/get/get-all/protocols";
import Customer, { ICustomer } from "../../../models/Customer";

export class GetCustomersRepository implements IGetCustomersRepository {
  async getAllCustomers(): Promise<ICustomer[]> {
    const getAllCustomers = await Customer.find();
    return getAllCustomers;
  }
}
