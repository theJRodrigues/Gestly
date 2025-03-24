import { IGetCustomerByIdRepository } from "../../../controllers/customers/get/get-by-id/protocols";
import Customer, { ICustomer } from "../../../models/Customer";

export class GetCustomerByIdRepository implements IGetCustomerByIdRepository {
  async getCustomerById(customerId: string): Promise<ICustomer | null> {
    const getCustomerById = Customer.findOne({ _id: customerId });
    return getCustomerById;
  }
}
