import { ICreateCustomerRepository, TCustomer } from "../../../controllers/customers-controllers/create-customer/protocols";
import Customer, { ICustomer } from "../../../models/Customer";

export class CreateCustomerRepository implements ICreateCustomerRepository{
    async    createCustomer(customer: TCustomer): Promise<ICustomer> {
        const createCustomer = await Customer.create(customer)
        return createCustomer
    }

}