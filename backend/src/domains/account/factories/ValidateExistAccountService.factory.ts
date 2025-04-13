import { ValidateExistAccountRepository } from "@infrastructure/MongoDB";
import {  ValidateExistAccountService } from "@domains/account"

export class ValidateExistAccountServiceFactory {
  static create() {
    const repository = new ValidateExistAccountRepository();
    const service = new ValidateExistAccountService(repository)
    return service;
  }
}