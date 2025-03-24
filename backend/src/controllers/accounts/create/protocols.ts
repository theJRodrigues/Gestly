import { Response } from "express";
import { IAccount } from "../../../models/Account";

export type AccountWithoutId = Omit<IAccount, "id">
export interface ICreateAccountController {
   create(req: Request, res: Response, account: AccountWithoutId): Promise<Response<IAccount>>;
}

export interface ICreateAccountRepository {
  create(account: AccountWithoutId): Promise<IAccount>;
}
