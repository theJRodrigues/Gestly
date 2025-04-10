import {
  IHttpErrorResponse,
  IHttpMessageResponse,
  IHttpResponse,
} from "@shared/protocols";
import { AccountDTO } from "@domains/account";

export interface ICreateAccountUseCase {
  create(
    account: AccountDTO
  ): Promise<IHttpResponse<IHttpMessageResponse | IHttpErrorResponse>>;
}
