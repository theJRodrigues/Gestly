export interface ITokenService{
    generateAccessToken(payload: string | object): string;
    generateRefreshToken(payload: string | object): string;
    generateCsrfToken(): string;
}