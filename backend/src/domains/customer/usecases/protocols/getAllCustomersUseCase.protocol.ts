import { CustomerDTO } from "@domains/customer";
import { IHttpErrorResponse, IHttpResponse } from "@shared/protocols";

export interface IGetAllCustomersUseCase {
  get(accountId: string)
  : Promise<IHttpResponse<CustomerDTO[] | IHttpErrorResponse>>;
}