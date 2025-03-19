import { IAccount } from "../../../models/Account";
import { IHTTPResponse } from "../../protocols";

export interface IGetAccountsController {
  getAccounts(): Promise<IHTTPResponse<IAccount[]>>;
}

export interface IGetAccountsRepository {
  getAccountsMongo(): Promise<IAccount[]>;
}
