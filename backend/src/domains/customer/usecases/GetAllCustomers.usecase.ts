import {
  IHttpResponse,
  IHttpErrorResponse,
  HttpStatusCode,
} from "@shared/protocols";
import {
  CustomerDTO,
  IGetAllCustomersUseCase,
  IGetAllCustomersRepository
} from "@domains/customer";
import { IValidateExistAccountService } from "@infrastructure/MongoDB";

export class GetAllCustomersUseCase implements IGetAllCustomersUseCase {
  constructor(
    private readonly repository: IGetAllCustomersRepository,
    private readonly validateAccontService: IValidateExistAccountService) {}

  async get(accountId: string)
  : Promise<IHttpResponse<CustomerDTO[] | IHttpErrorResponse>> {
    try {
      const isExistAccountId = await this.validateAccontService.validate(accountId);

      if (!isExistAccountId) {
        return {
          statusCode: HttpStatusCode.NotFound,
          body: {
            error: "Conta não encontrada! Faça o login novamente!",
          },
        };
      }

      const customers = await this.repository.get(accountId);
      return {
        statusCode: HttpStatusCode.OK,
        body: customers,
      };
      
    } catch (error) {
      return {
        statusCode: HttpStatusCode.InternalServerError,
        body: {
          error: "Ocorreu um erro ao procurar os clientes no banco de dados!",
        },
      };
    }
  }
}
