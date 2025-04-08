import mongoose from "mongoose";

import { AccountDTO } from "@domains/account";
import { accountSchema } from "@infrastructure/MongoDB/schemas";

export const AccountModel = mongoose.model<AccountDTO>("Account", accountSchema);
