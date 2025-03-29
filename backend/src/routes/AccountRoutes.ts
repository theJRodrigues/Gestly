import express, { Request, Response } from "express";
import { CreateAccountController } from "../controllers/accounts/create/CreateAccountController";
import { CreateAccountRepository } from "../repositories";
import { isValidy, ValidateCreateAccount } from "../middlewares";


const accountsRoutes = express.Router();

accountsRoutes.post(
  "/register",
  ValidateCreateAccount.validateFields(),
  isValidy.validationErrors,
  (req: Request, res: Response) => {
    const createAccountRepository = new CreateAccountRepository();

    const createAccount = new CreateAccountController(createAccountRepository);

    createAccount.createAccount(req, res);
  }
);
export default accountsRoutes;
