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
import { IValidateExistAccountService } from "@infrastructure/MongoDB";

export class CreateCustomerUseCase implements ICreateCustomerUseCase {
  constructor(
    private readonly repository: ICreateCustomerRepository,
    private readonly validateExistAccountService: IValidateExistAccountService
  ) {}
  async create(customerDTO: CustomerDTO)
  : Promise<IHttpResponse<Customer | IHttpErrorResponse>> {
    
    try {
      const customer = new Customer(customerDTO);

      const isNotExistAccount = await this.validateExistAccount(customer.accountIdRef)
      if (isNotExistAccount) {
        return isNotExistAccount;
      }

      const isUsedEmail = await this.validateExistEmail(customer.email);
      if (isUsedEmail) {
        return isUsedEmail;
      }
      
      const isUsedCPF = await this.validateExistCPF(customer.cpf);
      if (isUsedCPF) {
        return isUsedCPF;
      }
      
      const newCustomer = 
      await this.repository.create(customer);
      return {
        statusCode: HttpStatusCode.Created,
        body: newCustomer,
      };
    } 
    catch (error) {
      console.log(error)
      return {
        statusCode: HttpStatusCode.InternalServerError,
        body: {
          error: "Ocorreu um erro ao tentar criar o usuário no banco de dados ",
        },
      };
    }
  }

  private async validateExistAccount(accountIdRef: string): Promise<IHttpResponse<IHttpErrorResponse> | null> {
    const isExistAccount = 
      await this.validateExistAccountService
      .validate(accountIdRef);
      if (!isExistAccount) {
        return {
          statusCode: HttpStatusCode.NotFound,
          body: {
            error: "Conta não encontrada! Faça o login ou se cadastre!",
          },
        };
      }
      return null
  }

  private async validateExistEmail(email: string): Promise<IHttpResponse<IHttpErrorResponse> | null> {
    const customerAlreadUsesEmail = 
    await this.repository.findByEmail(email);
    if (customerAlreadUsesEmail){
      const fullName =
        customerAlreadUsesEmail.firstname + customerAlreadUsesEmail.lastname;
      return {
        statusCode: HttpStatusCode.Conflict,
        body: {
          error:
            "O email informado já está sendo utilizado no cadastro do cliente " + fullName
        },
      };
    }
    return null
  }

  private async validateExistCPF(cpf: string): Promise<IHttpResponse<IHttpErrorResponse> | null> {
    const customerAlreadUsesCPF = await this.repository.findByCPF(cpf);
      
    if (customerAlreadUsesCPF) {      
        return {
          statusCode: HttpStatusCode.Conflict,
          body: {
            error:
              "O CPF informado já está sendo utilizado no cadastro do cliente " + customerAlreadUsesCPF.getFullName()
          },
        };
      }
      return null
    }
}
