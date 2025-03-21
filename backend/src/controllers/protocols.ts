export interface IHTTPResponse<T>{
    statusCode: number,
    body: T | string
}
export interface IHTTPRequest<T>{
    header: any,
    body: T,
    params?: string
}

export enum statusCode {
    OK = 200,
    Created = 201,
    BadRequest = 400,
    Unauthorized = 401,
    Forbidden = 403,
    NotFound = 404,
    InternalServerError = 500,
    ServiceUnavailable = 503,
  }


