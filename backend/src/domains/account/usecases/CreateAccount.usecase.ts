import {
  IHttpResponse,
  IHttpErrorResponse,
  HttpStatusCode,
  IHttpMessageResponse,
} from "@shared/protocols";

import {
  AccountDTO,
  ICreateAccountUseCase,
  ICreateAccountRepository,
  Account,
} from "@domains/account";

export class CreateAccountUseCase implements ICreateAccountUseCase {
  constructor(private readonly repository: ICreateAccountRepository) {}

  async create(
    account: AccountDTO
  ): Promise<IHttpResponse<IHttpMessageResponse | IHttpErrorResponse>> {
    const newAccount = new Account(account);
    
    try {
      const isEmailAlreadyUsed = 
      await this.repository.findWithEmail(newAccount.email);

      if (isEmailAlreadyUsed) {
        return {
          statusCode: HttpStatusCode.Conflict,
          body: { error: "Já existe uma conta criada com o email informado!" },
        };
      }

      await this.repository.create(newAccount);
      return {
        statusCode: HttpStatusCode.Created,
        body: { message: "Conta criada com sucesso!" },
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
