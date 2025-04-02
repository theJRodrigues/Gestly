import { CreateAccountDTO, ICreateAccountController} from "@controllers";
import { IExpressAdapter } from "adapters/protocols";
import { Request, Response } from "express";

export class CreateAccountAdapter implements IExpressAdapter {
  constructor(private readonly controller: ICreateAccountController) {}

  async handle(req: Request,res: Response): Promise<void> {
    
    const account = req.body as CreateAccountDTO;
    const { statusCode, body } = await this.controller.create(account);

    res.status(statusCode).json(body);
  }
}
