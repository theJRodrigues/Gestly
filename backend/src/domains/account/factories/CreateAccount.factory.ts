import { ICreateAccountController } from "@protocols";
import { CreateAccountController } from "@controllers";
import { CreateAccountRepository } from "@repositories";

export class CreateAccountFactory {
  static make(): ICreateAccountController {
    const repository = new CreateAccountRepository();
    const controller = new CreateAccountController(repository);
    return controller;
  }
}