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

  private async validateNotUniqueness(
    customer: CustomerWithoutId
  ): Promise<{ message: string } | undefined> {

    const isCreatedByCPF = await this.createCustomerRepository.validateExistingCustomerWithCPF(customer);

    if (isCreatedByCPF) {
      const message = "Já existe um cadastro com esse CPF.";
      return { message };
    }

    const isCreatedByEmail = await this.createCustomerRepository.validateExistingWithEmail(customer);
    if (isCreatedByEmail) {
      const message = "Já existe um cadastro com esse Email.";
      return { message };
    }

    return;
  }
  async createCustomer(
    req: Request,
    res: Response
  ): Promise<Response<ICustomer | string>> {
    try {
      const customer: CustomerWithoutId = req.body;
      const validationNotUniqueness = await this.validateNotUniqueness(customer);

      if (validationNotUniqueness) {
        return res
          .status(statusCode.Conflict)
          .json({ error: validationNotUniqueness.message });
      }

      const newCustomer = await this.createCustomerRepository.createCustomer(customer);
      return res.status(statusCode.Created).json(newCustomer);
    
    } catch (error) {
      return res.status(statusCode.BadRequest).json({
        errorDB:
          "Ocorreu um erro ao tentar criar o usuário no banco de dados " +
          error,
      });
    }
  }
}
