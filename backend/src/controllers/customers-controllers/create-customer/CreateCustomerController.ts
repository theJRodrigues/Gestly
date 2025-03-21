import { ICustomer } from "../../../models/Customer";
import { IHTTPResponse, statusCode } from "../../protocols";
import { ICreateCustomerController, ICreateCustomerRepository, TCustomer } from "./protocols";

export class CreateCustomerController implements ICreateCustomerController{
    constructor(private readonly createCustomerRepository: ICreateCustomerRepository) {}   
    
    async handleCreateCustomer(customer: TCustomer): Promise<IHTTPResponse<ICustomer>> {
        try {
          const createCustomer = await this.createCustomerRepository.createCustomer(customer)
          return {statusCode: statusCode.Created, body: createCustomer}  
        } catch (error) {
            return {statusCode: statusCode.BadRequest, body: "Ocorreu um erro" + error}
        }
    }

}