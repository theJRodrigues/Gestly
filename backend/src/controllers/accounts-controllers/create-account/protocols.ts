import { IAccount } from "../../../models/Account";
import { IHTTPResponse } from "../../protocols";

export type TCreateAccountParams = Omit<IAccount, "id">
export interface ICreateAccountController {
  handleCreateAccount(params:TCreateAccountParams): Promise<IHTTPResponse<IAccount>>;
}

export interface ICreateAccountRepository {
  createAccount(params: TCreateAccountParams): Promise<IAccount>;
}
