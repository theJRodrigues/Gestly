import { Customer } from "@domains/customer";
import { IHttpErrorResponse, IHttpResponse } from "@shared/protocols";

export interface IGetAllCustomersUseCase {
  get(accountId: string)
  : Promise<IHttpResponse<Customer[] | IHttpErrorResponse>>;
}