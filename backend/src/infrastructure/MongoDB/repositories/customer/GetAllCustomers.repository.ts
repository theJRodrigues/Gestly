import { CustomerDTO, IGetAllCustomersRepository } from "@domains/customer";
import { CustomerModel } from "@infrastructure/MongoDB";

export class GetAllCustomersRepository implements IGetAllCustomersRepository {
  
  async get(accountId: string): Promise<CustomerDTO[]> {
    const customers = await CustomerModel.find({ accountIdRef: accountId });
    return customers;
  }
}
