import { Request, Response } from "express";
import { IAccount } from "../../../models/Account";

export type AccountWithoutId = Omit<IAccount, "id">
export interface ICreateAccountController {
   createAccount(req: Request, res: Response): Promise<Response<IAccount>>;
}

export interface ICreateAccountRepository {
  validateExistingAccountWithEmail(account: AccountWithoutId): Promise<boolean>
  
  createAccount(account: AccountWithoutId): Promise<IAccount>;
}
