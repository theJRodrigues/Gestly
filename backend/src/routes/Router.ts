import express ,{ Request, Response } from "express";
import User from "../models/User";

const router = express;
const routes = router();


routes.get("/users", async (req: Request, res: Response) => {
  const users = await User.find()
  res.status(200).json(users);
});

routes.delete("/users", async (req: Request, res: Response) => {
  const userId = req.body.id
  await User.findByIdAndDelete(userId)
  const users = await User.find()
  res.status(200).json(users);
});

routes.post("/users", async (req: Request, res: Response) => {
  const user = req.body
  const newUser = await User.create(user)
  res.json(newUser);
});

export default routes;
