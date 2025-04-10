import { CustomerDTO, IGetAllCustomersRepository } from "@domains/customer";
import { AccountModel, CustomerModel } from "@infrastructure/MongoDB";

export class GetAllCustomersRepository implements IGetAllCustomersRepository{
    async findById(accountId: string): Promise<boolean> {
        const isFound = await AccountModel.findById(accountId);
        return !!isFound;
    }
    async get(accountId: string): Promise<CustomerDTO[]> {
        const customers = await CustomerModel.find({accountId});
        return customers
    }
}