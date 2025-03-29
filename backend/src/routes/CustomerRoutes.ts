import express, { Request, Response } from "express";
import {CreateCustomerController,GetCustomerByIdController} from "../controllers";
import {CreateCustomerRepository,GetCustomerByIdRepository} from "../repositories";
import { ValidateCreateCustomer } from "../middlewares/validations-customer/create/ValidateCreateCustomer";
import { isValidy } from "../middlewares/isValid";
const customerRoutes = express.Router();

// customerRoutes.get("/", async (_req, res) => {
//   const getAllCustomersRepository = new GetCustomersRepository();
//   const getAllCustomersController = new GetCustomersController(
//     getAllCustomersRepository
//   );

//   const { statusCode, body } =
//     await getAllCustomersController.handleGetAllCustomers();
//   res.status(statusCode).json(body);
// });

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
    const createCustomerRepository = new CreateCustomerRepository();

    const createCustomerController = new CreateCustomerController(createCustomerRepository);

    createCustomerController.createCustomer(req, res);
  }
);

export default customerRoutes;
