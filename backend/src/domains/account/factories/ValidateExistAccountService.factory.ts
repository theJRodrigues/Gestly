import { ValidateExistAccountRepository } from "@infrastructure/MongoDB";
import {  ValidateExistAccountService } from "@shared/services"

export class ValidateExistAccountServiceFactory {
  static make(){
    const repository = new ValidateExistAccountRepository();
    const service = new ValidateExistAccountService(repository)
    return service;
  }
}