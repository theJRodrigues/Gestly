import { IGetCustomerByIdRepository } from "../../../controllers/customers/get/by-id/protocols";
import Customer, { ICustomer } from "../../../models/Customer";

export class GetCustomerByIdRepository implements IGetCustomerByIdRepository {
  async getById(customerId: string): Promise<ICustomer | null> {
    const getCustomerById = await Customer.findById(customerId);
    return getCustomerById;
  }
}
