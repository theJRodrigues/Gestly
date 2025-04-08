import express from "express";
import accountsRoutes from "./AccountRoutes";
import customerRoutes from "./CustomerRoutes";
const Routes = express.Router();
Routes.use("/accounts", accountsRoutes);
Routes.use("/customers", customerRoutes);

export default Routes;
