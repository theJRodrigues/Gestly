import { Account } from "../entities";

export interface IAuhthenticateAccountRepository {
  findByEmail(email: string): Promise<Account | null>;
}
