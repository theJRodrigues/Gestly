import { Request, Response } from "express";
import { ICustomer } from "../../../../models/Customer";

export interface IGetCustomerByIdController{
    handleGetCustomerById(req: Request, res: Response): Promise<Response<ICustomer | string>>
}

export interface IGetCustomerByIdRepository{
    getCustomerById(customerId: string): Promise<ICustomer | null>
}