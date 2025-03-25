import { body, ValidationChain } from "express-validator";

class CreateAccountValidate {
  private static validateFirstname(): ValidationChain {
    return body("firstname")
        .exists().withMessage("O primeiro nome é obrigatório")
        .bail()
        .trim().notEmpty().withMessage("O primeiro nome não pode ser vazio")
  }

  private static validateLastname(): ValidationChain {
    return body("lastname")
        .exists().withMessage("O último nome é obrigatório")
        .bail()
        .trim().notEmpty().withMessage("O último nome não pode ser vazio")
  }

  static validate(): ValidationChain[] {
    return [
        this.validateFirstname(), 
        this.validateLastname()
    ];
  }
}

export default CreateAccountValidate;
