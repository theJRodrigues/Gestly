import { IAccount } from "../../../models/Account";
import { IHTTPResponse } from "../../protocols";
import { IGetAccountsController, IGetAccountsRepository } from "./protocols";

export class GetAccountsController implements IGetAccountsController {
  constructor(private readonly getAccountsRepository: IGetAccountsRepository) {}

  async getAccounts(): Promise<IHTTPResponse<IAccount[]>> {
    try {
      const accounts = await this.getAccountsRepository.getAccountsMongo();
      return { statusCode: 200, body: accounts };
    } catch (error) {
      return { statusCode: 500, body: "Something went wrong" };
    }
  }
}
