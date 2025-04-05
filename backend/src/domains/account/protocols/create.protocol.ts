import { IAccount } from "@shared/models";
import { 
  IHttpResponse, 
  IHttpErrorResponse, 
  IHttpMessageResponse 
} from "@shared/protocols";

export type CreateAccountDTO = Omit<IAccount, "id">;
export interface ICreateAccountUseCase {
  create(account: CreateAccountDTO)
  : Promise<IHttpResponse<IHttpMessageResponse | IHttpErrorResponse>>;
}

export interface ICreateAccountRepository {
  existsWithEmail(account: CreateAccountDTO): Promise<boolean >;

  create(account: CreateAccountDTO): Promise<IAccount >;
}
