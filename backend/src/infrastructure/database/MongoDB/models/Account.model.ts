import mongoose from "mongoose";
import { accountSchema } from "@infrastructure/database/MongoDB";
import { AccountDTO } from "@domains/account";


export const AccountModel = mongoose.model<AccountDTO>("Accounts", accountSchema);
