import { CustomerDTO } from "@domains/customer";

export interface IGetAllCustomersRepository{
    findById(accountId: string): Promise<boolean>

    get(accountId: string): Promise<CustomerDTO[]>
}