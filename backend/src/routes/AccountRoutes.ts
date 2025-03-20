import express, { Request, Response } from "express";
import { GetAccountsRepository } from "../repositories/accounts-repositories/get-accounts-mongo/get-accounts-mongo";
import { GetAccountsController } from "../controllers/accounts-controllers/get-accounts/GetAccountsController";
import { CreateAccountRepository } from "../repositories/accounts-repositories/create-account-mongo/create-account-mongo";
import { CreateAccountController } from "../controllers/accounts-controllers/create-account/CreateAccountController";

const accountsRoutes = express.Router();

accountsRoutes.get("/", async (req, res) => {
  const getAccountsRepository = new GetAccountsRepository();
  const getAccountsController = new GetAccountsController(getAccountsRepository)
  const {statusCode, body} = await getAccountsController.getAccounts()
  res.status(statusCode).json(body)
});

accountsRoutes.post("/register", async (req, res) => {
  const createAccountsRepository = new CreateAccountRepository();
  const createAccountsController = new CreateAccountController(createAccountsRepository)
  const {statusCode, body} = await createAccountsController.handleCreateAccount(req.body)
  res.status(statusCode).json(body)
});
export default accountsRoutes;
