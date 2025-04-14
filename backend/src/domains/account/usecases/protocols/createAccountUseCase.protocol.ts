import {
  IHttpErrorResponse,
  IHttpMessageResponse,
  IHttpResponse,
} from "@shared/protocols";
import { AccountDTO } from "@domains/account";

export interface ICreateAccountUseCase {
  create(
    accountDTO: AccountDTO
  ): Promise<IHttpResponse<IHttpMessageResponse | IHttpErrorResponse>>;
}
