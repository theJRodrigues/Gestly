import { IHttpErrorResponse, IHttpResponse } from "@shared/protocols";

export interface IAuthenticationTokenResponse{
    accessToken: string;
    refreshToken: string;
    csrfToken: string;
}
export interface IAuthenticateAccountUseCase {
    authenticate (email: string, password: string)
    :Promise<IHttpResponse<IAuthenticationTokenResponse | IHttpErrorResponse>>
}