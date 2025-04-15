import { body, ValidationChain } from "express-validator";

export class CreateAccountMiddleware {
  private static validateFirstname(): ValidationChain {
    return body("firstname")
      .exists()
      .withMessage("O primeiro nome é obrigatório")
      .bail()
      .trim()
      .escape()
      .notEmpty({ ignore_whitespace: true })
      .withMessage("O primeiro nome não pode ser vazio");
  }

  private static validateLastname(): ValidationChain {
    return body("lastname")
      .exists()
      .withMessage("O sobrenome é obrigatório")
      .bail()
      .trim()
      .escape()
      .notEmpty({ ignore_whitespace: true })
      .withMessage("O sobrenome não pode ser vazio");
  }

  private static validateEmail(): ValidationChain {
    return body("email")
      .exists()
      .withMessage("O email é obrigatório")
      .bail()
      .isEmail()
      .withMessage("O email fornecido não é um email válido");
  }

  private static validatePassword(): ValidationChain {
    return body("password")
      .exists()
      .withMessage("A senha é obrigatória")
      .bail()
      .isStrongPassword({
        minLength: 8,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
      .withMessage(
        "A senha deve conter pelo menos 8 caracteres, incluindo 1 letra maiúscula, 1 número e 1 símbolo"
      );
  }
  static validateFields(): ValidationChain[] {
    return [
      this.validateFirstname(),
      this.validateLastname(),
      this.validateEmail(),
      this.validatePassword(),
    ];
  }
}
