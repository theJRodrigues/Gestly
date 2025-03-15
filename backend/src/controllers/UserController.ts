import UserModel from "../models/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { Request, Response } from "express";
dotenv.config();

if (!process.env.JWT_SECRET) {
  throw new Error("FATAL ERROR: JWT_SECRET não está definida");
}
const jwtSecret = process.env.JWT_SECRET;

const generateUserToken = (id: string) => {
  return jwt.sign({ id }, jwtSecret, {
    expiresIn: "7d",
  });
};

const register = async (req: Request, res:Response) => {
  res.send("registro");
};

export { generateUserToken, register };
