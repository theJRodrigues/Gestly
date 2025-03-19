import { IGetAccountsRepository } from "../../../controllers/accounts-controllers/get-accounts/protocols";
import Accounts, { IAccounts } from "../../../models/Accounts";

export class GetAccountsRepository implements IGetAccountsRepository {
  async getAccountsMongo(): Promise<IAccounts[]> {
      const accounts = await Accounts.find();
      return accounts;
  }
}
