import { IHttpResponse, IResponseError } from "@controllers";
import { IAccount } from "@models";

export type CreateAccountDTO = Omit<IAccount, "id">;
export interface ICreateAccountController {
  create(account: CreateAccountDTO): Promise<IHttpResponse<IAccount | IResponseError>>;
}

export interface ICreateAccountRepository {
  validateExistingAccountWithEmail(account: CreateAccountDTO): Promise<boolean>;

  create(account: CreateAccountDTO): Promise<IAccount>;
}
