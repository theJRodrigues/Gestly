import { Response } from "express";
import { ICustomer } from "@models/Customer";

export interface IGetAllCustomersController {
  getAll(res: Response): Promise<Response<ICustomer[]>>;
}

export interface IGetAllCustomersRepository {
  getAll(): Promise<ICustomer[]>;
}
