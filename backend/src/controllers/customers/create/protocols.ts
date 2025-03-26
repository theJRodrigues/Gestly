import { Request, Response } from "express";
import { ICustomer } from "../../../models/Customer";
export type CustomerWithoutId = Omit<ICustomer, "id">;

export interface ICreateCustomerController {
  createCustomer(req: Request, res: Response): Promise<Response<ICustomer>>;
}

export interface ICreateCustomerRepository {
  createCustomer(customer: CustomerWithoutId): Promise<ICustomer>;
}
