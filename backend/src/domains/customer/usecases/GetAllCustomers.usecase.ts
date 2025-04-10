import {
  IHttpResponse,
  IHttpErrorResponse,
  HttpStatusCode,
} from "@shared/protocols";
import {
  CustomerDTO,
  IGetAllCustomersUseCase,
  IGetAllCustomersRepository,
} from "@domains/customer";

export class GetAllCustomersUseCase implements IGetAllCustomersUseCase {
  constructor(private readonly repository: IGetAllCustomersRepository) {}

  async get(accountId: string)
  : Promise<IHttpResponse<CustomerDTO[] | IHttpErrorResponse>> {
    try {
      const isExistAccount = await this.repository.findById(accountId);

      if (!isExistAccount) {
        return {
          statusCode: HttpStatusCode.NotFound,
          body: {
            error: "Conta não encontrada! Faça o login novamente ou entre em contato com o administrador!",
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
