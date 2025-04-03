import { IHttpErrorResponse, HttpStatusCode } from "@shared/protocols";
export interface IHttpResponse<T> {
  statusCode: HttpStatusCode;
  body: T | IHttpErrorResponse;
}
