import { IGetCustomerByIdRepository } from "../../../controllers/customers-controllers/get-customers/get-customer-by-id/protocols";
import Customer, { ICustomer } from "../../../models/Customer";

export class GetCustomerByIdRepository implements IGetCustomerByIdRepository {
  async getCustomerById(customerId: string): Promise<ICustomer | null> {
    const getCustomerById = Customer.findOne({ _id: customerId });
    return getCustomerById;
  }
}
