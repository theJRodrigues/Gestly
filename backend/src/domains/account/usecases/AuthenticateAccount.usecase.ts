import {
  HttpStatusCode,
  IHttpErrorResponse,
  IHttpResponse,
} from "@shared/protocols";
import { IAuthenticateAccountUseCase, IAuthenticationTokenResponse } from "./protocols";
import { Account } from "../entities";

export class AuthenticateAccountUseCase implements IAuthenticateAccountUseCase {
  constructor(
    private readonly repository: any,
    private readonly tokenService: any,
    private readonly bcryptService: any
  ) {}

  async authenticate(email: string,password: string)
  :Promise<IHttpResponse<IAuthenticationTokenResponse | IHttpErrorResponse>> {
    try {
      const validAccount = await this.validateEmail(email);
      if (!validAccount) {
        return {
          statusCode: HttpStatusCode.NotFound,
          body: {
            error: "Email inválido!",
          },
        };
      }

      const isNotValidPassword = 
      await this.validatePassword(validAccount.password, password);
      if (isNotValidPassword) {
        return isNotValidPassword;
      }

      const tokens = await this.generateTokens(validAccount);
      return {
        statusCode: HttpStatusCode.OK,
        body: tokens
    };
    } catch (error) {
      console.log(error);
      return {
        statusCode: HttpStatusCode.InternalServerError,
        body: {
          error: "Internal Server Error",
        },
      };
    }
  }

  private async validateEmail(email: string)
  : Promise<Account | null> {
    const validAccountWithEmail = await this.repository.findByEmail(email);
    if (!validAccountWithEmail) {
      return null;
    }
    return validAccountWithEmail;
  }

  private async validatePassword(hashpassword: string, reqPassword: string)
  : Promise<null | IHttpResponse<IHttpErrorResponse>> {
    const isValidPassword = 
    await this.bcryptService.compare(hashpassword,reqPassword);
    if (!isValidPassword) {
      return {
        statusCode: HttpStatusCode.Unauthorized,
        body: {
          error: "Senha inválida!",
        },
      };
    }
    return null;
  }

  private async generateTokens(account:Account): Promise<IAuthenticationTokenResponse> {
    const {id, email} = account;
    const accessToken = 
    await this.tokenService.generateAccessToken(id, email);

    const refreshToken = 
    await this.tokenService.generateAccessToken(id, email);

    const csrfToken = 
    await this.tokenService.generateCsrfToken(id, email);

    return { accessToken, refreshToken, csrfToken };
  }
}
