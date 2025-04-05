import  {
  Router, 
  Request, 
  Response 
} from "express";

import {
  ValidateErrorsMiddlewares,
  CreateAccountMiddleware,
} from "@shared/middlewares";

import {
  CreateAccountFactory, 
  CreateAccountController
} from '@domains/account'

const accountsRoutes = Router();

accountsRoutes.post(
  "/register",
  CreateAccountMiddleware.validateFields(),
  ValidateErrorsMiddlewares.handle,
  (req: Request, res: Response) => {
    const useCase = CreateAccountFactory.make();
    const controller = new CreateAccountController(useCase);
    return controller.handle(req, res);
  }
);
export default accountsRoutes;
