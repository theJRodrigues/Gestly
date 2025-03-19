export interface IHTTPResponse<T>{
    statusCode: number,
    body: T | string
}