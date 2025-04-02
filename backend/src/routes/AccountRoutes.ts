import express, { Request, Response } from "express";
import { isValidy, ValidateCreateAccount } from "@middlewares/index";
import { CreateAccountAdapter } from "adapters/express/account/CreateAccountAdapter";
import { CreateAccountFactory } from "factories/account/CreateAccountFactory";

const accountsRoutes = express.Router();


accountsRoutes.post(
  "/register",
  ValidateCreateAccount.validateFields(),
  isValidy.validationErrors,
  (req: Request, res: Response) =>{
    const controller = CreateAccountFactory.make();
    const adapter = new CreateAccountAdapter(controller);
    return adapter.handle(req, res);
  }
);
export default accountsRoutes;
