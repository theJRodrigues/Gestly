import { ICustomer } from "../../../../models/Customer";
import { IHTTPResponse } from "../../../protocols";

export interface IGetAllCustomersController{
    handleGetAllCustomers(): Promise<IHTTPResponse<ICustomer[]>>
}

export interface IGetAllCustomersRepository{
    getAllCustomers(): Promise<ICustomer[]>
}