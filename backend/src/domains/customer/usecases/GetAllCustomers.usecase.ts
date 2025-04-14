import {
  IHttpResponse,
  IHttpErrorResponse,
  HttpStatusCode,
} from "@shared/protocols";
import {
  IGetAllCustomersUseCase,
  IGetAllCustomersRepository,
  Customer
} from "@domains/customer";
import { IValidateExistAccountService } from "@domains/account";

export class GetAllCustomersUseCase implements IGetAllCustomersUseCase {
  constructor(
    private readonly repository: IGetAllCustomersRepository,
    private readonly service: IValidateExistAccountService
  ) {}
  
  async get(accountId: string)
  : Promise<IHttpResponse<Customer[] | IHttpErrorResponse>> {
    try {
      const isNotExistAccount = 
      await this.validateExistAccount(accountId);
      if (isNotExistAccount) {
        return isNotExistAccount
      }
      

      const customers = await this.repository.get(accountId);
      return {
        statusCode: HttpStatusCode.OK,
        body: customers,
      };
      
    } catch (error) {
      console.log(error)
      return {
        statusCode: HttpStatusCode.InternalServerError,
        body: {
          error: "Ocorreu um erro ao procurar os clientes no banco de dados!",
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
  }
}
