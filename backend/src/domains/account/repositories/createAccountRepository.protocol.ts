import { AccountDTO } from "../dtos";

export interface ICreateAccountRepository {
  findWithEmail(email: string): Promise<AccountDTO | null>;

  create(account: AccountDTO): Promise<AccountDTO>;
}
