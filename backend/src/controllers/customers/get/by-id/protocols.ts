import { Request, Response } from "express";
import { ICustomer } from "@models/Customer";

export interface IGetCustomerByIdController {
  getById(req: Request, res: Response): Promise<Response<ICustomer>>;
}

export interface IGetCustomerByIdRepository {
  getById(customerId: string): Promise<ICustomer | null>;
}
