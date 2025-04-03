import { IHttpResponse, IErrorResponse } from "@protocols";
import { IAccount } from "@shared/models";

export type CreateAccountDTO = Omit<IAccount, "id">;
export interface ICreateAccountUseCase {
  create(
    account: CreateAccountDTO
  ): Promise<IHttpResponse<IAccount | IErrorResponse>>;
}

export interface ICreateAccountRepository {
  validateExistingWithEmail(account: CreateAccountDTO): Promise<boolean>;

  create(account: CreateAccountDTO): Promise<IAccount>;
}
