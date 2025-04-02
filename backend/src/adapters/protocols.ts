import { Request, Response } from "express";

export interface IExpressAdapter {
  handle(req: Request, res: Response): Promise<void>;
}