import { ICustomer } from "../../../../models/Customer";
import { IHTTPResponse } from "../../../protocols";

export interface IGetCustomersController {
  handleGetAllCustomers(): Promise<IHTTPResponse<ICustomer[]>>;
}

export interface IGetCustomersRepository {
  getAllCustomers(): Promise<ICustomer[]>;
}
