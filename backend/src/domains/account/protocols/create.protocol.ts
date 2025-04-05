import { IHttpResponse, IHttpErrorResponse } from "@shared/protocols";
import { IAccount } from "@shared/models";

export type CreateAccountDTO = Omit<IAccount, "id">;
export interface ICreateAccountUseCase {
  create(account: CreateAccountDTO)
  : Promise<IHttpResponse<IAccount | IHttpErrorResponse>>;
}

export interface ICreateAccountRepository {
  existsWithEmail(account: CreateAccountDTO): Promise<boolean>;

  create(account: CreateAccountDTO): Promise<IAccount>;
}
