import { Response } from "express";
import { ICustomer } from "@models/Customer";
import { statusCode } from "@controllers/protocols";
import { IGetAllCustomersController, IGetAllCustomersRepository } from "./protocols";

export class GetAllCustomersController implements IGetAllCustomersController {
  constructor(private readonly getAllCustomersRepository
    :IGetAllCustomersRepository) {}

  async getAll(res: Response): Promise<Response<ICustomer[]>> {
    try {
      const getAllCustomers = await this.getAllCustomersRepository.getAll();

      return res.status(statusCode.OK).json(getAllCustomers)
    } catch (error) {
      return res.status(statusCode.BadRequest)
      .json({errorDB: "Ocorreu um erro ao solicitar os clientes no banco de dados. \n" + error})
      };
    }
  }

