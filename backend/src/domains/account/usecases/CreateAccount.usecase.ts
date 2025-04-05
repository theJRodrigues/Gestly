import { IAccount } from "@shared/models";
import {
  IHttpResponse,
  IHttpErrorResponse,
  HttpStatusCode,
} from "@shared/protocols";

import {
  CreateAccountDTO,
  ICreateAccountUseCase,
  ICreateAccountRepository,
} from "@domains/account";

export class CreateAccountUseCase implements ICreateAccountUseCase {
  constructor(private readonly repository: ICreateAccountRepository) {}

  async create(account: CreateAccountDTO)
  : Promise<IHttpResponse<IAccount | IHttpErrorResponse>> {
    try {
      const isExistAccountWithEmail = 
      await this.repository.existsWithEmail(account);

      if (isExistAccountWithEmail) {
        return {
          statusCode: HttpStatusCode.Conflict,
          body: { error: "Já existe uma conta criada com o email informado!" },
        };
      }

      const newAccount = await this.repository.create(account);

      return {
        statusCode: HttpStatusCode.Created,
        body: newAccount,
      };
    } catch (error) {
      return {
        statusCode: HttpStatusCode.InternalServerError,
        body: {
          error:
            "Ocorreu um erro ao tentar criar a conta no banco de dados!" +
            error,
        },
      };
    }
  }
}
