import express, { Request, Response } from "express";
import UserModel from "../models/User";
import { register } from "../controllers/UserController";

const userRoutes = express.Router();

userRoutes.post("/register", register)

// userRoutes.get("/users", async (req: Request, res: Response) => {
//   const users = await UserModel.find();
//   res.status(200).json(users);
// });

// userRoutes.delete("/users", async (req: Request, res: Response) => {
//   const userId = req.body.id;
//   await UserModel.findByIdAndDelete(userId);
//   const users = await UserModel.find();
//   res.status(200).json(users);
// });

// userRoutes.post("/users", async (req: Request, res: Response) => {
//   const user = req.body;
//   const newUser = await UserModel.create(user);
//   res.json(newUser);
// });

export default userRoutes;
