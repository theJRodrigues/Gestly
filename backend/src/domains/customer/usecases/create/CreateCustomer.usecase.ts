import {
  IHttpErrorResponse,
  IHttpResponse,
  HttpStatusCode,
} from "@shared/protocols";

import {
   CustomerDTO, 
   ICreateCustomerUseCase, 
   ICreateCustomerRepository,
   Customer
} from "@domains/customer";

export class CreateCustomerUseCase implements ICreateCustomerUseCase{
  constructor(private readonly repository: ICreateCustomerRepository) {}

  async create(customer: CustomerDTO)
  :Promise<IHttpResponse<CustomerDTO | IHttpErrorResponse>> {
    const customerEntity = new Customer(customer);
    try {
      const newCustomer = 
      await this.repository.create(customerEntity);
      return {
        statusCode: HttpStatusCode.Created,
        body: newCustomer,
      };
    } catch (error) {
      return {
        statusCode: HttpStatusCode.InternalServerError,
        body: {
          error: "Ocorreu um erro ao tentar criar o usuário no banco de dados ",
        },
      };
    }
  }
}
