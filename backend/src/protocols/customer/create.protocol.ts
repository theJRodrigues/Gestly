import { ICustomer } from "@models";
import { IErrorResponse, IHttpResponse } from "@protocols";

export type CreateCustomerDTO = Omit<ICustomer, "id">;
export interface ICreateCustomerController {
  create(customer: CreateCustomerDTO)
    :Promise<IHttpResponse<ICustomer | IErrorResponse>>;
}

export interface ICreateCustomerRepository {
  existsByCPF(customer: CreateCustomerDTO): Promise<boolean>;

  existsByEmail(customer:CreateCustomerDTO): Promise<boolean>;

  create(customer: CreateCustomerDTO): Promise<ICustomer>;
}
