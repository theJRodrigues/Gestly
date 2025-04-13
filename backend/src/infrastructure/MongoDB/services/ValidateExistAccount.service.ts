import { AccountModel, IValidateExistAccountService } from "@infrastructure/MongoDB";

export class ValidateExistAccountService implements IValidateExistAccountService{
    async validate(accountId: string): Promise<boolean> {
        const isFound = await AccountModel.findById(accountId);
        return !!isFound;
    }
}