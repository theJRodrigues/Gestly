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
      const isEmailAlreadyUsed = await this.repository.findByEmail(customerEntity.email);
      if (isEmailAlreadyUsed) {
        return {
          statusCode: HttpStatusCode.Conflict,
          body: {
            error: "O email informado já está sendo utilizado no cadastro do cliente " 
            + isEmailAlreadyUsed.firstname 
            + " " 
            + isEmailAlreadyUsed.lastname},
        };
      }
      const isCPFAlreadyUsed = await this.repository.findByCPF(customerEntity.cpf);
      if (isCPFAlreadyUsed) {
        return {
          statusCode: HttpStatusCode.Conflict,
          body: {
            error: "O CPF informado já está sendo utilizado no cadastro do cliente " 
            + isCPFAlreadyUsed.firstname 
            + " " 
            + isCPFAlreadyUsed.lastname},
        };
      }

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
