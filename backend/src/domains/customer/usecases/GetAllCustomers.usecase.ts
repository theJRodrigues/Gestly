import {
  IHttpResponse,
  IHttpErrorResponse,
  HttpStatusCode,
} from "@shared/protocols";
import {
  IGetAllCustomersUseCase,
  IGetAllCustomersRepository,
  CustomerDTO
} from "@domains/customer";
import { IValidateExistAccountService } from "@domains/account";

export class GetAllCustomersUseCase implements IGetAllCustomersUseCase {
  constructor(
    private readonly repository: IGetAllCustomersRepository,
    private readonly service: IValidateExistAccountService
  ) {}
  
  async get(accountId: string)
  : Promise<IHttpResponse<CustomerDTO[] | IHttpErrorResponse>> {
    try {
      const isNotExistAccount = 
      await this.validateExistAccount(accountId);
      if (isNotExistAccount) {
        return isNotExistAccount
      }
      
      const customers = await this.repository.get(accountId);
      const customersDTO = customers.map((customer) => customer.toObject())
      return {
        statusCode: HttpStatusCode.OK,
        body: customersDTO,
      };
      
    } catch (error) {
      console.log(error)
      return {
        statusCode: HttpStatusCode.InternalServerError,
        body: {
          error: "Conta não encontrada! Faça o login ou se cadastre!",
        },
      };
    }
  }

  private async validateExistAccount(accountId: string) {
    const isExistAccountId = await this.service.validate(accountId);
    if (!isExistAccountId) {
      return {
        statusCode: HttpStatusCode.NotFound,
        body: {
          error: "Conta não encontrada! Faça o login novamente!",
        },
      };
    }
    return null
  }
}
