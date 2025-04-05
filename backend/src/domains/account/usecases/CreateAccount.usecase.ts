import {
  IHttpResponse,
  IHttpErrorResponse,
  HttpStatusCode,
  IHttpMessageResponse,
} from "@shared/protocols";

import {
  CreateAccountDTO,
  ICreateAccountUseCase,
  ICreateAccountRepository,
} from "@domains/account";

export class CreateAccountUseCase implements ICreateAccountUseCase {

  constructor(private readonly repository: ICreateAccountRepository) {}

  async create(account: CreateAccountDTO)
  : Promise<IHttpResponse<IHttpMessageResponse | IHttpErrorResponse>> {
    try {
      const isExistWithEmail = 
      await this.repository.existsWithEmail(account);

      if (isExistWithEmail) {
        return {
          statusCode: HttpStatusCode.Conflict,
          body: { error: "Já existe uma conta criada com o email informado!" },
        };
      }

      await this.repository.create(account);
      return {
        statusCode: HttpStatusCode.Created,
        body: {message: "Conta criada com sucesso!"},
      };
    } catch (error) {
      return {
        statusCode: HttpStatusCode.InternalServerError,
        body: {
          error:
            "Ocorreu um erro ao tentar se comunicar com o banco de dados! Por favor, tente novamente mais tarde.",
        },
      };
    }
  }
}
