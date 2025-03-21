import express, { Request, Response } from "express";
import Customer from "../models/Customer";
import { CreateCustomerRepository } from "../repositories/customers-repositories/create-customer-mongo/CreateCustomerRepository";
import { CreateCustomerController } from "../controllers/customers-controllers/create-customer/CreateCustomerController";
import { GetAllCustomersRepository } from "../repositories/customers-repositories/get-customer-mongo/GetAllCustomersRepository";
import { GetAllCustomersController } from "../controllers/customers-controllers/get-customer/GetAllCustomersController";
const customerRoutes = express.Router();

customerRoutes.get("/", async (req, res) => {
  const getAllCustomersRepository = new GetAllCustomersRepository()
  const getAllCustomersController = new GetAllCustomersController(getAllCustomersRepository);

  const {statusCode, body} = await getAllCustomersController.handleGetAllCustomers();
  res.status(statusCode).json(body)
});

customerRoutes.post("/create", async (req, res) => {
  const createCustomerRepository = new CreateCustomerRepository()
  const createCustomerController = new CreateCustomerController(createCustomerRepository);

  const {statusCode, body} = await createCustomerController.handleCreateCustomer(req.body)
  res.status(statusCode).json(body)
});

export default customerRoutes;
