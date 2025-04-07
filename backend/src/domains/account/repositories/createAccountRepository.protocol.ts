import { AccountDTO } from "../dto";

export interface ICreateAccountRepository {
  existsWithEmail(account: AccountDTO): Promise<boolean >;

  create(account: AccountDTO): Promise<AccountDTO>;
}