import { CreateAccountDTO, ICreateAccountRepository } from "@controllers/index";
import Account, { IAccount } from "@models/Account";

export class CreateAccountRepository implements ICreateAccountRepository {
  async validateExistingWithEmail(account: CreateAccountDTO): Promise<boolean> {
    const existingAccount = await Account.findOne({ email: account.email });
    return !!existingAccount;
  }

  async create(account: CreateAccountDTO): Promise<IAccount> {
    const newAccount = await Account.create(account);
    return newAccount;
  }
}
