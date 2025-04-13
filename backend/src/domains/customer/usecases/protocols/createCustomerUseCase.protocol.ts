import { Customer, CustomerDTO } from "@domains/customer";
import { IHttpErrorResponse, IHttpResponse } from "@shared/protocols";

export interface ICreateCustomerUseCase {
  create(customerDTO: CustomerDTO)
  : Promise<IHttpResponse<Customer | IHttpErrorResponse>>;
}


