import {
  ICreateAccountRepository,
  TCreateAccountParams,
} from "../../../controllers/accounts/create/protocols";
import Account, { IAccount } from "../../../models/Account";

export class CreateAccountRepository implements ICreateAccountRepository {
  async createAccount(params: TCreateAccountParams): Promise<IAccount> {
    const createAccount = await Account.create(params);
    return createAccount;
  }
}
