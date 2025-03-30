import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";
import { statusCode } from "@controllers/protocols";

export class isValidy {
  static validationErrors(
    req: Request,
    res: Response,
    next: NextFunction
  ): void {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res
        .status(statusCode.UnprocessableEntity)
        .json({ errors: errors.array() });
      return;
    }

    next();
  }
}
