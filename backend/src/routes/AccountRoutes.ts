import express, { Request, Response } from "express";
import {
  ValidateErrorsMiddlewares,
  CreateAccountMiddleware,
} from "@shared/middlewares";
import { CreateAccountController } from "@adapters";
import { CreateAccountFactory } from "@factories";

const accountsRoutes = express.Router();

accountsRoutes.post(
  "/register",
  CreateAccountMiddleware.validateFields(),
  ValidateErrorsMiddlewares.handle,
  (req: Request, res: Response) => {
    const controller = CreateAccountFactory.make();
    const adapter = new CreateAccountController(controller);
    return adapter.handle(req, res);
  }
);
export default accountsRoutes;
