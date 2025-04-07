import { Response } from "express";
import { ICustomer } from "@infrastructure/MongoDB/models/Customer.model";

export interface IGetAllCustomersController {
  getAll(res: Response): Promise<Response<ICustomer[]>>;
}

export interface IGetAllCustomersRepository {
  getAll(): Promise<ICustomer[]>;
}
