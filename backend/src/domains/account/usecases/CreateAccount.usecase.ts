import { IAccount } from "@shared/models";
import {
  IHttpResponse,
  IErrorResponse,
  statusCode,
  CreateAccountDTO,
  ICreateAccountUseCase,
  ICreateAccountRepository,
} from "@protocols";

export class CreateAccountUseCase implements ICreateAccountUseCase {
  constructor(
    private readonly createAccountRepository: ICreateAccountRepository
  ) {}

  async create(
    account: CreateAccountDTO
  ): Promise<IHttpResponse<IAccount | IErrorResponse>> {
    try {
      const isExistAccountWithEmail =
        await this.createAccountRepository.validateExistingWithEmail(account);

      if (isExistAccountWithEmail) {
        return {
          statusCode: statusCode.Conflict,
          body: { error: "Já existe uma conta criada com o email informado!" },
        };
      }

      const newAccount = await this.createAccountRepository.create(account);

      return {
        statusCode: statusCode.Created,
        body: newAccount,
      };
    } catch (error) {
      return {
        statusCode: statusCode.InternalServerError,
        body: {
          error:
            "Ocorreu um erro ao tentar criar a conta no banco de dados!" +
            error,
        },
      };
    }
  }
}
