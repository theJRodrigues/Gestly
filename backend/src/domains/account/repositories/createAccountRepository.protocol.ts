import { Account } from "@domains/account";

export interface ICreateAccountRepository {
  findWithEmail(email: string): Promise<boolean>;

  create(account: Account): Promise<void>;
}
