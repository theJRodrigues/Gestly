import { AccountModel } from "@infrastructure/MongoDB";

export class ValidateAccountIdExistService{
    static async validate(accountId: string): Promise<boolean | Error> {
        const isFound = await AccountModel.findById(accountId);
        return !!isFound;
       
    }
}