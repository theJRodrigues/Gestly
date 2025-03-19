import express, { Request, Response } from "express";
import accountsRoutes from "./UserRoutes";
import customerRoutes from "./CustomerRoutes";
const Routes = express.Router();
Routes.use("/accounts", accountsRoutes);
Routes.use("/customers", customerRoutes);

export default Routes;
