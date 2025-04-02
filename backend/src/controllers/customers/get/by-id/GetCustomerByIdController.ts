import { ICustomer } from "@models";
import {
  IGetCustomerByIdController,
  IGetCustomerByIdRepository,
  statusCode
} from "@protocols";

export class GetCustomerByIdController implements IGetCustomerByIdController {
  constructor(private readonly repository: IGetCustomerByIdRepository) {}

  async getById(req: Request, res: Response): Promise<Response<ICustomer>> {
    try {
      const { id: customerId } = req.params;
      const customer = await this.repository.getById(customerId);

      if (!customer) {
        return res.status(statusCode.NotFound).json("Cliente não encontrado");
      }

      return res.status(statusCode.OK).json(customer);
    } catch (error) {
      return res
        .status(statusCode.BadRequest)
        .json(
          "Ocorreu um erro solicitar o cliente no banco de dados \n" + error
        );
    }
  }
}
