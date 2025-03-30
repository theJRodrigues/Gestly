import express, {Request, Response } from "express";
import {CreateCustomerController, GetCustomerByIdController} from "@controllers";
import {CreateCustomerRepository,GetAllCustomersRepository,GetCustomerByIdRepository} from "@repositories";
import { ValidateCreateCustomer, isValidy} from "@middlewares";
import { GetAllCustomersController } from "@controllers";

const customerRoutes = express.Router();

customerRoutes.get("/", async (_req, res) => {
  const repository = new GetAllCustomersRepository();
  const controller = new GetAllCustomersController(repository);

  controller.getAll(res);
});

customerRoutes.get("/:id", (req, res) => {
  const getCustomerByIdRepository = new GetCustomerByIdRepository();

  const getCustomerByIdController = new GetCustomerByIdController(
    getCustomerByIdRepository
  );

  getCustomerByIdController.handleGetCustomerById(req, res);
});

customerRoutes.post("/create",
  ValidateCreateCustomer.validateFields(),
  isValidy.validationErrors,
  (req: Request, res: Response) => {
    const repository = new CreateCustomerRepository();
    const controller = new CreateCustomerController(repository);
    controller.createCustomer(req, res);
  }
);

export default customerRoutes;
