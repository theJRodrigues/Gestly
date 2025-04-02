import { IHttpResponse, IErrorResponse } from "@controllers";
import { IAccount } from "@models";

export type CreateAccountDTO = Omit<IAccount, "id">;
export interface ICreateAccountController {
  create(
    account: CreateAccountDTO
  ): Promise<IHttpResponse<IAccount | IErrorResponse>>;
}

export interface ICreateAccountRepository {
  validateExistingWithEmail(account: CreateAccountDTO): Promise<boolean>;

  create(account: CreateAccountDTO): Promise<IAccount>;
}
