import express, { Request, Response } from "express";
import Customer from "../models/Customer";
import { CreateCustomerRepository } from "../repositories/customers-repositories/create-customer-mongo/CreateCustomerRepository";
import { CreateCustomerController } from "../controllers/customers-controllers/create-customer/CreateCustomerController";
const customerRoutes = express.Router();

customerRoutes.post("/create", async (req, res) => {
  const createCustomerRepository = new CreateCustomerRepository()
  const createCustomerController = new CreateCustomerController(createCustomerRepository);

  const {statusCode, body} = await createCustomerController.handleCreateCustomer(req.body)
  res.status(statusCode).json(body)
});

export default customerRoutes;
