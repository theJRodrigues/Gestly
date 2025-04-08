import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";
import {  HttpStatusCode } from "@shared/protocols";

export class ValidateErrorsMiddlewares {
  static handle(req: Request, res: Response, next: NextFunction): void {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res
        .status(HttpStatusCode.UnprocessableEntity)
        .json({ errors: errors.array() });
      return;
    }

    next();
  }
}
