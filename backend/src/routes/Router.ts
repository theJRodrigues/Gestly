import express, { Request, Response } from "express";
import accountsRoutes from "./AccountRoutes";
import customerRoutes from "./CustomerRoutes";
const Routes = express.Router();
Routes.use("/accounts", accountsRoutes);
Routes.use("/customer", customerRoutes);

export default Routes;
