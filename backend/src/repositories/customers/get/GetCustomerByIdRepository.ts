import { IGetCustomerByIdRepository } from "../../../protocols/customer/getById.protocol";
import Customer, {
  ICustomer,
} from "../../../infrastructure/MongoDB/models/Customer.model";

export class GetCustomerByIdRepository implements IGetCustomerByIdRepository {
  async getById(customerId: string): Promise<ICustomer | null> {
    const getCustomerById = await Customer.findById(customerId);
    return getCustomerById;
  }
}
