import { CreateAccountDTO, ICreateAccountUseCase } from "@protocols";
import { IExpressController } from "@shared/protocols";
import { Request, Response } from "express";

export class CreateAccountController implements IExpressController {
  constructor(private readonly useCase: ICreateAccountUseCase) {}

  async handle(req: Request, res: Response): Promise<void> {
    const account = req.body as CreateAccountDTO;
    const { statusCode, body } = await this.useCase.create(account);

    res.status(statusCode).json(body);
  }
}
