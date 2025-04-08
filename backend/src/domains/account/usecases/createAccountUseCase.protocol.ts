import {
  IHttpErrorResponse,
  IHttpMessageResponse,
  IHttpResponse,
} from "@shared/protocols";
import { AccountDTO } from "../dtos";

export interface ICreateAccountUseCase {
  create(
    account: AccountDTO
  ): Promise<IHttpResponse<IHttpMessageResponse | IHttpErrorResponse>>;
}
