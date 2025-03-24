import express from "express";
import { CreateAccountRepository } from "../repositories/accounts/create/CreateAccountRepository";
import { CreateAccountController } from "../controllers/accounts/create/CreateAccountController";

const accountsRoutes = express.Router();
accountsRoutes.post("/register", async (req, res) => {
  const createAccountsRepository = new CreateAccountRepository();
  const createAccountsController = new CreateAccountController(
    createAccountsRepository
  );
  const { statusCode, body } =
    await createAccountsController.handleCreateAccount(req.body);
  res.status(statusCode).json(body);
});
export default accountsRoutes;
