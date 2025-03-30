import express, { Request, Response } from "express";
import { CreateAccountController } from "@controllers/index";
import { CreateAccountRepository } from "@repositories/index";
import { isValidy, ValidateCreateAccount } from "@middlewares/index";


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
