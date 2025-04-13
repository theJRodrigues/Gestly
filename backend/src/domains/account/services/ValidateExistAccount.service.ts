import {
  IValidateExistAccountServiceRepository,
  IValidateExistAccountService,
} from "@domains/account";

export class ValidateExistAccountService
  implements IValidateExistAccountService
{
  constructor(
    private readonly repository: IValidateExistAccountServiceRepository
  ) {}

  async validate(accountId: string): Promise<boolean> {
    const isValid = await this.repository.validate(accountId);
    return isValid;
  }
}
