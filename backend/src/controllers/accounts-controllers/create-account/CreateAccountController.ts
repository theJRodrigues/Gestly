import { IAccount } from "../../../models/Account";
import { IHTTPResponse } from "../../protocols";
import {
  ICreateAccountController,
  ICreateAccountRepository,
  TCreateAccountParams,
} from "./protocols";

export class CreateAccountController implements ICreateAccountController {
  constructor(
    private readonly CreateAccountRepository: ICreateAccountRepository
  ) {}

  async handleCreateAccount(account: TCreateAccountParams): Promise<IHTTPResponse<IAccount>> {

    if(Object.keys(account).length < 4)
        return  {statusCode: 400, body: "Todas as informações são obrigatórias"}  

    for (const [key, value] of Object.entries(account)) {
        if (value === null || value === undefined || value === '') {
          return { statusCode: 400, body: `O campo de ${key} não pode ser vazio` };
        }
      }


    try {
      const createAccount = await this.CreateAccountRepository.createAccount(account);
      return { statusCode: 201, body: createAccount };
    } catch (error) {
      return {statusCode: 500, body:"Something went wrong" + error};
    }
  }
}
