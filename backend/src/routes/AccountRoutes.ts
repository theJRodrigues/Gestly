import express, { Request, Response } from "express";
import { CreateAccountController } from "../controllers/accounts/create/CreateAccountController";
import ValidationCreateAccount from "../middlewares/validations-account/create/ValidationCreateAccount";
import { isValidy } from "../middlewares/isValid";
import { CreateAccountRepository } from "../repositories";

const accountsRoutes = express.Router();

accountsRoutes.post(
  "/register",
  ValidationCreateAccount.validateFields(),
  isValidy.validationErrors,
  (req: Request, res: Response) => {
    const createAccountRepository = new CreateAccountRepository();

    const createAccount = new CreateAccountController(createAccountRepository);

    createAccount.createAccount(req, res);
  }
);
export default accountsRoutes;
