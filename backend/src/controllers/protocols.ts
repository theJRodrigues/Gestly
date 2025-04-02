export enum statusCode {
  OK = 200,
  Created = 201,
  BadRequest = 400,
  Unauthorized = 401,
  Forbidden = 403,
  NotFound = 404,
  Conflict = 409,
  UnprocessableEntity = 422,
  InternalServerError = 500,
  ServiceUnavailable = 503,
}

export interface IHttpResponse<T> {
  statusCode: statusCode;
  body: T;
}
export interface IErrorResponse {
  error: string;
}
