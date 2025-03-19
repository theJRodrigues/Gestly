import express, { Request, Response } from "express";
import { GetAccountsRepository } from "../repositories/accounts-repositories/get-accounts-mongo/get-accounts-mongo";
import { GetAccountsController } from "../controllers/accounts-controllers/get-accounts/get-accounts-controller";

const accountsRoutes = express.Router();

accountsRoutes.get("/", async (req: Request, res: Response) => {
  const getAccountsRepository = new GetAccountsRepository();
  const getAccountsController = new GetAccountsController(getAccountsRepository)

  const {statusCode, body} = await getAccountsController.getAccounts()
  res.status(statusCode).json(body)
});
export default accountsRoutes;
