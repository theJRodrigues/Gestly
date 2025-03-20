import { ICustomer } from "../../../models/Customer";
import { IHTTPResponse } from "../../protocols";
export type TCustomer = Omit<ICustomer, "id">

export interface ICreateCustomerController{
    handleCreateCustomer( customer: TCustomer ): Promise<IHTTPResponse<ICustomer>>
}

export interface ICreateCustomerRepository{
    createCustomer (customer: TCustomer): Promise<ICustomer>
}