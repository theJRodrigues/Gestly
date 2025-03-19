import { IGetAccountsRepository } from "../../../controllers/accounts-controllers/get-accounts/protocols";
import Account, { IAccount } from "../../../models/Account";

export class GetAccountsRepository implements IGetAccountsRepository {
  async getAccountsMongo(): Promise<IAccount[]> {
    const accounts = await Account.find();
    return accounts;
  }
}
