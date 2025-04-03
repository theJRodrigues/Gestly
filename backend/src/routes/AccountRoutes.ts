import express, { Request, Response } from "express";
import { isValidy, ValidateCreateAccount } from "@shared/middlewares";
import { CreateAccountController } from "@adapters";
import { CreateAccountFactory } from "@factories";

const accountsRoutes = express.Router();

accountsRoutes.post(
  "/register",
  ValidateCreateAccount.validateFields(),
  isValidy.validationErrors,
  (req: Request, res: Response) => {
    const controller = CreateAccountFactory.make();
    const adapter = new CreateAccountController(controller);
    return adapter.handle(req, res);
  }
);
export default accountsRoutes;
