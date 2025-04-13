export interface IValidateExistAccountServiceRepository {
  validate(accountId: string): Promise<boolean>;
}
