import { Request, Response } from "express";
import { ICustomer } from "@models";
export type CustomerWithoutId = Omit<ICustomer, "id">;

export interface ICreateCustomerController {
  createCustomer(
    req: Request,
    res: Response
  ): Promise<Response<ICustomer | string>>;
}

export interface ICreateCustomerRepository {
  validateExistingCustomerWithCPF(
    customer: CustomerWithoutId
  ): Promise<boolean>;

  validateExistingWithEmail(customer: CustomerWithoutId): Promise<boolean>;

  createCustomer(customer: CustomerWithoutId): Promise<ICustomer>;
}
