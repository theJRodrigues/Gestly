import { CreateCustomerDTO, ICreateCustomerController } from "@protocols";
import { IExpressController } from "@adapters";
import { Request, Response } from "express";

export class CreateCustomerAdapter implements IExpressController {
  constructor(private readonly controller: ICreateCustomerController) {}

  async handle(req: Request, res: Response): Promise<void> {
    const customer = req.body as CreateCustomerDTO;
    const { statusCode, body } = await this.controller.create(customer);

    res.status(statusCode).json(body);
    return;
  }
}
