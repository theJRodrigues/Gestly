import { Request, Response } from "express";
import { IAccount } from "../../../models/Account";
import { statusCode } from "../../protocols";
import {  AccountWithoutId, ICreateAccountController, ICreateAccountRepository,} from "./protocols";

export class CreateAccountController 
implements ICreateAccountController{
  constructor(private readonly createAccountRepository
    :ICreateAccountRepository){}

  async createAccount(req: Request, res: Response): Promise<Response<IAccount>> {
    try {
      const account:AccountWithoutId  =  req.body
      
      const isExistAccountWithEmail = await this.createAccountRepository.validateExistingAccountWithEmail(account)

      if(isExistAccountWithEmail){
        return res.status(statusCode.Conflict).json({error: "Já existe uma conta criado com o email informado!"})
      }

      const newAccount = await this.createAccountRepository.createAccount(account)
      
      return res.status(statusCode.Created).json(newAccount) 
    } catch (error) {
      return res.status(statusCode.InternalServerError).json({errorDB: "Ocorreu um erro ao tentar criar a conta no banco de dados!" + error})    
  }
}
}
