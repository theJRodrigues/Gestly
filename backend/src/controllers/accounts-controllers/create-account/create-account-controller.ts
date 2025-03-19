import { IAccount } from "../../../models/Account";
import { IHTTPResponse } from "../../protocols";
import {
  ICreateAccountController,
  ICreateAccountRepository,
} from "./protocols";

export class CreateAccountController implements ICreateAccountController {
  constructor(
    private readonly createAccountRepository: ICreateAccountRepository
  ) {}

  async handleCreateAccount(): Promise<IHTTPResponse<IAccount>> {
    try {
      const createAccount = await this.createAccountRepository.createAccount();
      return { statusCode: 201, body: createAccount };
    } catch (error) {
      return {statusCode: 500, body:"Something went wrong"};
    }
  }
}
