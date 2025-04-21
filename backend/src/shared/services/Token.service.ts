import jwt from "jsonwebtoken";
import { ITokenService } from "./protocols/tokenServices.protocol";
import { envs } from "@shared/constants";

export class TokenService implements ITokenService {
  generateAccessToken(payload: string | object): string {
    const {jwtSecret} = envs;
    const token =  jwt.sign(payload, jwtSecret!,{
        expiresIn: 1000 * 60 * 15 
    })
    return token
  }

   generateRefreshToken(payload: string | object): string {
    const {jwtSecret} = envs;
    const token = jwt.sign(payload, jwtSecret!,{
        expiresIn: 1000 * 60 * 60 * 24 * 7  
    })
    return token
  }

  generateCsrfToken(): string {
    return "csrf-token";
  }

}