import express from "express";
import { GetAllCustomersController ,CreateCustomerController, GetCustomerByIdController } from "../controllers";
import { CreateCustomerRepository, GetAllCustomersRepository, GetCustomerByIdRepository } from "../repositories";
const customerRoutes = express.Router();

customerRoutes.get("/", async (req, res) => {
  const getAllCustomersRepository = new GetAllCustomersRepository()
  const getAllCustomersController = new GetAllCustomersController(getAllCustomersRepository);

  const {statusCode, body} = await getAllCustomersController.handleGetAllCustomers();
  res.status(statusCode).json(body)
});

customerRoutes.get("/:id", (req, res) => {
  const getCustomerByIdRepository = 
  new GetCustomerByIdRepository()

  const getCustomerByIdController = 
  new GetCustomerByIdController(getCustomerByIdRepository);
  
  getCustomerByIdController.handleGetCustomerById(req, res);
});

customerRoutes.post("/create", async (req, res) => {
  const createCustomerRepository = new CreateCustomerRepository()
  const createCustomerController = new CreateCustomerController(createCustomerRepository);

  const {statusCode, body} = await createCustomerController.handleCreateCustomer(req.body)
  res.status(statusCode).json(body)
});

export default customerRoutes;
