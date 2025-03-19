import { IAccount } from "../../../models/Account";
import { IHTTPResponse } from "../../protocols";

export interface IPostAccountController {
  handleCreateAccount(): Promise<IHTTPResponse<IAccount>>;
}

export interface IPostAccountRepository {
  createAccount(): Promise<IAccount>;
}
