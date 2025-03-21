import { IAccount } from "../../../models/Account";
import { IHTTPResponse, statusCode } from "../../protocols";
import { IGetAccountsController, IGetAccountsRepository } from "./protocols";

export class GetAccountsController implements IGetAccountsController {
  constructor(private readonly getAccountsRepository: IGetAccountsRepository) {}

  async getAccounts(): Promise<IHTTPResponse<IAccount[]>> {
    try {
      const accounts = await this.getAccountsRepository.getAccountsMongo();
      return { statusCode: statusCode.OK, body: accounts };
    } catch (error) {
      return { statusCode: statusCode.BadRequest, body: "Something went wrong" };
    }
  }
}
