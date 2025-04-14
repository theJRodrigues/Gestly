import { Customer } from "@domains/customer";

export interface IGetAllCustomersRepository{
    get(accountId: string): Promise<Customer[]>
}