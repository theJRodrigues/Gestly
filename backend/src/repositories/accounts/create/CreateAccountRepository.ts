import { AccountWithoutId, ICreateAccountRepository } from "@controllers/index";
import Account, { IAccount } from "@models/Account";



export class CreateAccountRepository implements ICreateAccountRepository {

  async validateExistingAccountWithEmail(account: AccountWithoutId): Promise<boolean>{
    const existingAccount= await Account.findOne({email: account.email})
    return !!existingAccount
  }

  async createAccount(account: AccountWithoutId): Promise<IAccount> {
    const newAccount = await Account.create(account);
    return newAccount;
  }
}
