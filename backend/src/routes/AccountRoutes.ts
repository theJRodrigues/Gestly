import express from "express";
import { CreateAccountController } from "../controllers/accounts/create/CreateAccountController";

const accountsRoutes = express.Router();

accountsRoutes.post("/register",(req, res) => {
  const createAccount = new CreateAccountController()
  createAccount.create(res, req.body)
});
export default accountsRoutes;
