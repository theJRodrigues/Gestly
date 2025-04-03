import { IGetCustomerByIdRepository } from "../../../protocols/customer/getById.protocol";
import Customer, { ICustomer } from "../../../shared/models/Customer";

export class GetCustomerByIdRepository implements IGetCustomerByIdRepository {
  async getById(customerId: string): Promise<ICustomer | null> {
    const getCustomerById = await Customer.findById(customerId);
    return getCustomerById;
  }
}
