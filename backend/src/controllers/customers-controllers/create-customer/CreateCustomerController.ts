import { ICustomer } from "../../../models/Customer";
import { IHTTPResponse } from "../../protocols";
import { ICreateCustomerController, ICreateCustomerRepository, TCustomer } from "./protocols";

export class CreateCustomerController implements ICreateCustomerController{
    constructor(private readonly createCustomerRepository: ICreateCustomerRepository) {}   
    
    async handleCreateCustomer(customer: TCustomer): Promise<IHTTPResponse<ICustomer>> {
        try {
          const createCustomer = await this.createCustomerRepository.createCustomer(customer)
          return {statusCode: 201, body: createCustomer}  
        } catch (error) {
            return {statusCode: 400, body: "Ocorreu um erro" + error}
        }
    }

}