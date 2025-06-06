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
import { IValidateExistAccountService } from "@domains/account";

export class CreateCustomerUseCase implements ICreateCustomerUseCase {
  constructor(
    private readonly repository: ICreateCustomerRepository,
    private readonly service: IValidateExistAccountService
  ) {}
  async create(customerDTO: CustomerDTO)
  : Promise<IHttpResponse<CustomerDTO | IHttpErrorResponse>> {
    
    try {
      const customer = new Customer(customerDTO);

      const isNotExistAccount = await this.validateExistAccount(customer.accountIdRef!)
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
      await this.repository.create(customer.toObject());
      return {
        statusCode: HttpStatusCode.Created,
        body: newCustomer.toObject(),
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
    const isExistAccount = await this.service.validate(accountIdRef);
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
      return {
        statusCode: HttpStatusCode.Conflict,
        body: {
          error:
            "O email informado já está sendo utilizado no cadastro do cliente " + customerAlreadUsesEmail.getFullName()
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
