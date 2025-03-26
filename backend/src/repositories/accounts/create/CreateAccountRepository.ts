import { AccountWithoutId, ICreateAccountRepository } from "../../../controllers";
import Account, { IAccount } from "../../../models/Account";



export class CreateAccountRepository implements ICreateAccountRepository {
  async createAccount(account: AccountWithoutId): Promise<IAccount> {
    const newAccount = await Account.create(account);
    return newAccount;
  }
}
