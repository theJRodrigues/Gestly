import { Response } from "express";
import { IAccount } from "../../../models/Account";
import { statusCode } from "../../protocols";
import {  AccountWithoutId,} from "./protocols";
import { CreateAccountRepository } from "../../../repositories/accounts/create/CreateAccountRepository";

export class CreateAccountController{
   async create(res: Response, account: AccountWithoutId): Promise<Response<IAccount>> {

    try {
      const CreateAccount = new CreateAccountRepository();
      const createdAccount = await CreateAccount.create(account)
      return res.status(statusCode.Created).json(createdAccount) 
    } catch (error) {
      return res.status(statusCode.InternalServerError).send("Something went wrong" + error)
    }
  }
}
