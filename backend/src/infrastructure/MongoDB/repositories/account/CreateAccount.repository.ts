import { AccountDTO, ICreateAccountRepository } from "@domains/account";
import { AccountModel } from "@infrastructure/MongoDB";

export class CreateAccountRepository implements ICreateAccountRepository {
  async findWithEmail(email: string): Promise<AccountDTO | null> {
    const isFound = 
    await AccountModel.findOne({email: email});
    
    return isFound;
  }

  async create(account: AccountDTO): Promise<AccountDTO> {
    const newAccount = await AccountModel.create(account);
    return newAccount;
  }
}
