import { ICustomer } from "../../../models/Customer";
import { IHTTPResponse, statusCode } from "../../protocols";
import { IGetAllCustomersController, IGetAllCustomersRepository } from "./protocols";

export class GetAllCustomersController implements IGetAllCustomersController{
    constructor(private readonly getAllCustomersRepository: IGetAllCustomersRepository){}
    
    async handleGetAllCustomers(): 
    Promise<IHTTPResponse<ICustomer[]>> {
        try {
            const getAllCustomers= await this.getAllCustomersRepository.getAllCustomers()
            return {statusCode: statusCode.OK, body: getAllCustomers}
        } catch (error) {
            return {statusCode: statusCode.BadRequest, body: "Ocorreu um erro" + error}
        }
    }

}