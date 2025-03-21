import { IGetAllCustomersRepository } from "../../../controllers/customers-controllers/get-customer/protocols";
import Customer, { ICustomer } from "../../../models/Customer";

export class GetAllCustomersRepository implements IGetAllCustomersRepository{
    async getAllCustomers(): Promise<ICustomer[]> {
        const getAllCustomers = await Customer.find()
        return getAllCustomers
    }

}