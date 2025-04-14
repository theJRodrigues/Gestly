import { AccountDTO } from "@domains/account";

export interface IAccount {
  id?: string;
  firstname: string;
  lastname: string;
  email: string;
  password: string;

  toObject(): AccountDTO;
  hashPassword(): Promise<void>;
}
