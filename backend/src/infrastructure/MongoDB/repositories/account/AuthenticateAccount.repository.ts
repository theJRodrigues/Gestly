import { Account, IAuhthenticateAccountRepository } from "@domains/account";
import { AccountModel } from "@infrastructure/MongoDB";

export class AuthenticateAccountRepository implements IAuhthenticateAccountRepository{
    async findByEmail(email: string): Promise<Account | null> {
        const isFound = 
        await AccountModel.findOne({email: {$eq: email}});
        
        const account = isFound ? new Account(isFound.toObject()) : null;
        return account
    }

}