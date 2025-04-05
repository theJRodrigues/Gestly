import express, { Request, Response } from "express";
import {
  CreateCustomerMiddleware,
  ValidateErrorsMiddlewares,
} from "@shared/middlewares";
import { CreateCustomerFactory } from "factories/customer/CreateCustomer.factory";
import { CreateCustomerAdapter } from "adapters/express/customer/CreateCustomer.adapter";

const customerRoutes = express.Router();

// customerRoutes.get("/", (_req, res) => {
//   const repository = new GetAllCustomersRepository();
//   const controller = new GetAllCustomersController(repository);
//   controller.getAll(res);
// });

// customerRoutes.get("/:id", (req, res) => {
//   const repository = new GetCustomerByIdRepository();
//   const controller = new GetCustomerByIdController(repository);
//   controller.get(req, res);
// });

customerRoutes.post(
  "/create",
  CreateCustomerMiddleware.validateFields(),
  ValidateErrorsMiddlewares.handle,
  (req: Request, res: Response) => {
    const controller = CreateCustomerFactory.make();
    const adapter = new CreateCustomerAdapter(controller);

    adapter.handle(req, res);
  }
);

export default customerRoutes;
