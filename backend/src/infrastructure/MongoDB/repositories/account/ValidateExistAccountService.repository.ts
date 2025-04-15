import { AccountModel } from "@infrastructure/MongoDB";

export class ValidateExistAccountRepository {
  async validate(accountId: string): Promise<boolean> {
    const isFound = 
    await AccountModel.findOne({accountId: {$eq: accountId}}).exec();
    return !!isFound;
  }
}