import { Request, Response } from "express";
import { ICustomer } from "../../../../models/Customer";
import { IGetCustomerByIdController, IGetCustomerByIdRepository } from "./protocols";
import { statusCode } from "../../../protocols";
import mongoose from "mongoose";

export class GetCustomerByIdController implements IGetCustomerByIdController{
    constructor(private readonly getCustomerByIdRepo: IGetCustomerByIdRepository){}
    
    async handleGetCustomerById(req: Request, res:Response): Promise<Response<ICustomer | string>> {
        try {
            const {id: customerId} = req.params
            
            //add in middleware
            if(!mongoose.Types.ObjectId.isValid(customerId))
                return res.status(statusCode.BadRequest).json("O Id informado não é válido")
            
            const getCustomerById = await this.getCustomerByIdRepo.getCustomerById(customerId)

            if(!getCustomerById) 
                return res.status(statusCode.NotFound).json("Cadastro não encontrado")

            return res.status(statusCode.OK).json(getCustomerById)
        } catch (error) {
            return res.status(statusCode.BadRequest).json("Ocorreu um erro" + error)
        }




    }
}