import { IAccount } from "../../../models/Account";
import { IHTTPResponse } from "../../protocols";

export interface ICreateAccountController {
  handleCreateAccount(): Promise<IHTTPResponse<IAccount>>;
}

export interface ICreateAccountRepository {
  createAccount(): Promise<IAccount>;
}
