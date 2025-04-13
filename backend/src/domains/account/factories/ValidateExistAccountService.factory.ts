import { ValidateExistAccountRepository } from "@infrastructure/MongoDB";
import {  IValidateExistAccountService, ValidateExistAccountService } from "@domains/account"

export class ValidateExistAccountServiceFactory {
  static make(){
    const repository = new ValidateExistAccountRepository();
    const service = new ValidateExistAccountService(repository)
    return service;
  }
}