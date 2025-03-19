import express, { Request, Response } from "express";
import Customer from "../models/Customer";
const customerRoutes = express.Router();

customerRoutes.post("/customer", async (req, res) => {
const customer = req.body;
  const newCustomer = await Customer.create(customer);
  res.status(201).json(newCustomer);
});

export default customerRoutes;
