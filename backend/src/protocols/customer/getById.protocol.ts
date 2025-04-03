import { Request, Response } from "express";
import { ICustomer } from "@shared/models/Customer";

export interface IGetCustomerByIdController {
  get(req: Request, res: Response): Promise<Response<ICustomer>>;
}

export interface IGetCustomerByIdRepository {
  getById(customerId: string): Promise<ICustomer | null>;
}
