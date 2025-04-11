import {
  IHttpErrorResponse,
  IHttpResponse,
  HttpStatusCode,
} from "@shared/protocols";

import {
  CustomerDTO,
  ICreateCustomerUseCase,
  ICreateCustomerRepository,
  Customer,
} from "@domains/customer";
import { ValidateAccountIdExistService } from "@shared/services";

export class CreateCustomerUseCase implements ICreateCustomerUseCase {
  constructor(private readonly repository: ICreateCustomerRepository) {}

  async create(
    customer: CustomerDTO
  ): Promise<IHttpResponse<CustomerDTO | IHttpErrorResponse>> {
    const newCustomer = new Customer(customer);

    try {
      const isExistAccountId = 
      await ValidateAccountIdExistService
      .validate(customer.accountIdRef);
      if (!isExistAccountId) {
        return {
          statusCode: HttpStatusCode.NotFound,
          body: {
            error: "Conta não encontrada! Faça o login novamente!",
          },
        };
      }

      const emailAlreadyUsedOnTheCustomer = await this.repository.findByEmail(newCustomer.email );
      if (emailAlreadyUsedOnTheCustomer) {
        return {
          statusCode: HttpStatusCode.Conflict,
          body: {
            error:
              "O email informado já está sendo utilizado no cadastro do cliente " +
              emailAlreadyUsedOnTheCustomer.firstname +
              " " +
              emailAlreadyUsedOnTheCustomer.lastname,
          },
        };
      }

      const CPFAlreadyUsedOnTheCustomer = 
      await this.repository.findByCPF(newCustomer.cpf);
      if (CPFAlreadyUsedOnTheCustomer) {
        return {
          statusCode: HttpStatusCode.Conflict,
          body: {
            error:
              "O CPF informado já está sendo utilizado no cadastro do cliente " +
              CPFAlreadyUsedOnTheCustomer.firstname +
              " " +
              CPFAlreadyUsedOnTheCustomer.lastname,
          },
        };
      }

      const createdCustomer = 
      await this.repository.create(newCustomer);
      return {
        statusCode: HttpStatusCode.Created,
        body: createdCustomer,
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
