import { IAccounts } from "../../../models/Accounts";
import { IHTTPResponse } from "../../protocols";

export interface IGetAccountsController {
  getAccounts(): Promise<IHTTPResponse<IAccounts[]>>;
}

export interface IGetAccountsRepository {
  getAccountsMongo(): Promise<IAccounts[]>;
}
