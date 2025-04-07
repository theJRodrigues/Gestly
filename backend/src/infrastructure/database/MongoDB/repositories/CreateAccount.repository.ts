import { AccountDTO, ICreateAccountRepository } from "@domains/account";
import { AccountModel } from "../models";

export class CreateAccountRepository implements ICreateAccountRepository {
  async existsWithEmail(account: AccountDTO): Promise<boolean> {
  
      const existingAccount = await AccountModel.findOne({ email: account.email });
      return !!existingAccount;
  }

  async create(account: AccountDTO): Promise<AccountDTO> {
      const newAccount = await AccountModel.create(account);
      return newAccount;  
  }
}
