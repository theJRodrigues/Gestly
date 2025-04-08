import { Request, Response } from "express";

export interface IExpressController {
  handle(req: Request, res: Response): Promise<void>;
}
