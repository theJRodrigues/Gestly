import { CreateAccountDTO, ICreateAccountRepository } from "@protocols";
import {Account, IAccount } from "@shared/models";

export class CreateAccountRepository implements ICreateAccountRepository {
  async existsWithEmail(account: CreateAccountDTO): Promise<boolean> {
  
      const existingAccount = await Account.findOne({ email: account.email });
      return !!existingAccount;
  }

  async create(account: CreateAccountDTO): Promise<IAccount> {
      const newAccount = await Account.create(account);
      return newAccount;  
  }
}
