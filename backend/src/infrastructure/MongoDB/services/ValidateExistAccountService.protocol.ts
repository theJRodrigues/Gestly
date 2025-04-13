export interface IValidateExistAccountService {
  validate(accountId: string): Promise<boolean>
}