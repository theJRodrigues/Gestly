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

  async create(accountDTO: AccountDTO )
  :Promise<IHttpResponse<IHttpMessageResponse | IHttpErrorResponse>> {
    try {
      const account = new Account(accountDTO);
      await account.hashPassword();

      const emailAlreadyUsed = await this.validateUsedEmail(account.email);
      if(emailAlreadyUsed) {
        return emailAlreadyUsed
      }
      await this.repository.create(account);
      return {
        statusCode: HttpStatusCode.Created,
        body: { message: "Conta criada com sucesso!" },
      };
    } catch (error) {
      console.log(error)
      return {
        statusCode: HttpStatusCode.InternalServerError,
        body: {
          error:
            "Ocorreu um erro ao tentar se comunicar com o banco de dados! Por favor, tente novamente mais tarde.",
        },
      };
    }
  }

  private async validateUsedEmail(email: string): Promise<IHttpResponse<IHttpMessageResponse> | null> {

    const isEmailAlreadyUsed = 
    await this.repository.findWithEmail(email);

    if (isEmailAlreadyUsed) {
      return {
        statusCode: HttpStatusCode.Conflict,
        body: { error: "Já existe uma conta criada com o email informado!" },
      };
    }
    return null
  }
}
