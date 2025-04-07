import { Request, Response } from "express";
import { ICustomer } from "@infrastructure/database/MongoDB/models/Customer.model";

export interface IGetCustomerByIdController {
  get(req: Request, res: Response): Promise<Response<ICustomer>>;
}

export interface IGetCustomerByIdRepository {
  getById(customerId: string): Promise<ICustomer | null>;
}
