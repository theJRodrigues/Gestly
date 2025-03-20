export interface IHTTPResponse<T>{
    statusCode: number,
    body: T | string
}
export interface IHTTPRequest<T>{
    header: any,
    body: T,
    params?: string
}


