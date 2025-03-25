import express, { Request, Response } from "express";
import { CreateAccountController } from "../controllers/accounts/create/CreateAccountController";
import CreateAccountValidate from "../middlewares/ValidateAccountInfos";
import { isValidy } from "../middlewares/isValid";

const accountsRoutes = express.Router();

accountsRoutes.post(
  "/register",
  CreateAccountValidate.validateFields(),
  isValidy.validationErrors,
  (req: Request, res: Response) => {
    const createAccount = new CreateAccountController();
    createAccount.create(res, req.body);
  }
);
export default accountsRoutes;
