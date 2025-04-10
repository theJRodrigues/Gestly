import { CustomerDTO, IGetAllCustomersUseCase } from "@domains/customer";
import { IExpressController } from "@shared/protocols";
import { Request, Response } from "express";

export class GetAllCustomersController implements IExpressController{
    constructor(private readonly useCase: IGetAllCustomersUseCase) {}
    
    async handle(req: Request, res: Response ): Promise<void> {
        const {accountId} = req.params
        const {statusCode, body} = await this.useCase.get(accountId);
         res.status(statusCode).json(body);
         return
    }
}