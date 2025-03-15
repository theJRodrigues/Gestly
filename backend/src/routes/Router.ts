import express, { Request, Response } from "express";
import userRoutes from "./UserRoutes";
const Routes = express.Router();
Routes.use("/api/users", userRoutes);

export default Routes;
