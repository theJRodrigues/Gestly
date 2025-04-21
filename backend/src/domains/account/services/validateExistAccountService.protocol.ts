//TODO mudar nome para ExistAccountId
export interface IValidateExistAccountService {
  validate(accountId: string): Promise<boolean>;
}
