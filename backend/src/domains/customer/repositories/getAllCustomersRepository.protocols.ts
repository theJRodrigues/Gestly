import { CustomerDTO } from "@domains/customer";

export interface IGetAllCustomersRepository{
    get(accountId: string): Promise<CustomerDTO[]>
}