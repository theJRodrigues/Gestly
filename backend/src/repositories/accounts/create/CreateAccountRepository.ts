import {
  ICreateAccountRepository,
  AccountWithoutId,
} from "../../../controllers/accounts/create/protocols";
import Account, { IAccount } from "../../../models/Account";

export class CreateAccountRepository implements ICreateAccountRepository {
  async create(account: AccountWithoutId): Promise<IAccount> {
    const createAccount = await Account.create(account);
    return createAccount;
  }
}
