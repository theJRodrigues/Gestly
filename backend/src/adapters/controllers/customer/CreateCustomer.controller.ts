import { IExpressController } from "@shared/protocols";
import { Request, Response } from "express";
import { CustomerDTO, ICreateCustomerUseCase } from "@domains/customer";

export class CreateCustomerController implements IExpressController {
  constructor(private readonly useCase: ICreateCustomerUseCase) {}

  async handle(req: Request, res: Response): Promise<void> {
    const customer = req.body as CustomerDTO;
    const { statusCode, body } = await this.useCase.create(customer);

    res.status(statusCode).json(body);
    return;
  }
}
