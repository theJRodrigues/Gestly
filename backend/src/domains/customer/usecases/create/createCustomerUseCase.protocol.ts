import { CustomerDTO } from "@domains/customer/dtos";
import { IHttpErrorResponse, IHttpResponse } from "@shared/protocols";

export interface ICreateCustomerUseCase {
  create(customer: CustomerDTO)
  : Promise<IHttpResponse<CustomerDTO | IHttpErrorResponse>>;
}


