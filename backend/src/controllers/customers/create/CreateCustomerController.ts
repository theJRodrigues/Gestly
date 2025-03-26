import { Request, Response } from "express";
import { ICustomer } from "../../../models/Customer";
import { statusCode } from "../../protocols";
import {
  ICreateCustomerController,
  ICreateCustomerRepository,
  CustomerWithoutId,
} from "./protocols";

export class CreateCustomerController implements ICreateCustomerController {
  constructor(
    private readonly createCustomerRepository: ICreateCustomerRepository
  ) {}

  async createCustomer(
    req: Request,
    res: Response
  ): Promise<Response<ICustomer>> {
    try {
      const customer: CustomerWithoutId = req.body;
      const newCustomer = await this.createCustomerRepository.createCustomer(
        customer
      );

      return res.status(statusCode.Created).json(newCustomer);
    } catch (error) {
      return res.status(statusCode.BadRequest).json({
        errorDB:
          "Ocorreu um erro ao tentar criar o usuário no banco de dados " + error,
      });
    }
  }
}
