import { Account, ICreateAccountRepository } from "@domains/account";
import { AccountModel } from "@infrastructure/MongoDB";

export class CreateAccountRepository implements ICreateAccountRepository {
  async findWithEmail(email: string): Promise<boolean> {
    const isFoundAccount = 
    await AccountModel.findOne({email: {$eq:email}});
    return !!isFoundAccount;
  }

  async create(account: Account): Promise<void> {
    const objAccount = account.toObject();
    await AccountModel.create(objAccount);
    return 
  }
}
