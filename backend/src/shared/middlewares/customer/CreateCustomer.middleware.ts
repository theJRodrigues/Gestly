import { body, ValidationChain } from "express-validator";

export class CreateCustomerMiddleware {
  private static validateFirstName(): ValidationChain {
    return body("firstname")
      .exists()
      .withMessage("O primeiro nome é obrigatório.")
      .bail()
      .trim().escape()
      .notEmpty({ ignore_whitespace: true })
      .withMessage("O primeiro nome não pode estar vazio.")
      .bail();
  }
  private static validateLastName(): ValidationChain {
    return body("lastname")
      .exists()
      .withMessage("O sobrenome é obrigatório.")
      .bail()
      .trim().escape()
      .notEmpty({ ignore_whitespace: true })
      .withMessage("O sobrenome não pode estar vazio.")
      .bail();
  }
  private static validateEmail(): ValidationChain {
    return body("email")
      .exists()
      .withMessage("O email é obrigatório.")
      .bail()
      .trim()
      .isEmail()
      .withMessage("O email deve ser válido.")
      .bail();
  }

  private static validateContact(): ValidationChain {
    return body("contact")
      .exists()
      .withMessage("O contato é obrigatório.")
      .bail()
      .trim().escape();
  }
  private static validateContactDDD(): ValidationChain {
    return body("contact.DDD")
      .exists()
      .withMessage("O DDD é obrigatório.")
      .bail()
      .trim().escape()
      .isLength({ min: 2, max: 2 })
      .withMessage("DDD informado está incorreto.")
      .bail()
      .toInt()
      .custom((value) => {
        if (value < 11 || value > 99) {
          throw new Error(
            "O DDD informado não existe. O DDD deve ser entre 11 a 99."
          );
        }
        return true;
      })
      .bail();
  }

  private static validateContactNumber(): ValidationChain {
    return body("contact.number")
      .exists()
      .withMessage("O número do contato é obrigatório.")
      .bail()
      .trim().escape()
      .isLength({ min: 9, max: 9 })
      .withMessage("O número de contato informado deve conter 9 números.")
      .bail();
  }

  private static validateCPF(): ValidationChain {
    return body("cpf")
      .exists()
      .withMessage("O CPF é obrigatório.")
      .bail()
      .trim().escape()
      .isLength({ min: 11, max: 11 })
      .withMessage("O CPF deve conter 11 números.")
      .bail();
  }
  private static validateBirthDay(): ValidationChain {
    return body("birthDate")
      .exists()
      .withMessage("A data de nascimento é obrigatória")
      .bail()
      .trim().escape()
      .isDate()
      .withMessage("A data de nascimento está no formato incorreto.")
      .bail()
      .toDate()
      .custom((birthDate: Date) => {
        const dateNow = new Date();
        dateNow.setHours(-3, 0, 0, 0);
        if (birthDate >= dateNow) {
          throw new Error(
            "A data de nascimento não pode ser maior ou igual a data atual."
          );
        }
        return true;
      })
      .bail();
  }

  private static validateAddress(): ValidationChain {
    return body("address")
      .exists()
      .withMessage("O endereço é obrigatório")
      .bail()
      .trim().escape();
  }

  private static validateAdrressCep(): ValidationChain {
    return body("address.cep")
      .exists()
      .withMessage("O CEP é obrigatório.")
      .bail()
      .trim().escape()
      .isLength({ min: 8, max: 8 })
      .withMessage("O CEP deve conter 8 números.")
      .bail();
  }

  private static validateAddressStreet(): ValidationChain {
    return body("address.street")
      .exists()
      .withMessage("O nome da Rua é obrigatório.")
      .bail()
      .trim().escape()
      .notEmpty({ ignore_whitespace: true })
      .withMessage("A campo Rua não pode estar vazio")
      .bail();
  }
  private static validateAddressNumber(): ValidationChain {
    return body("address.number")
      .exists()
      .withMessage("O número do endereço é obrigatório.")
      .bail()
      .trim().escape()
      .notEmpty({ ignore_whitespace: true })
      .withMessage("O campo número do endereço não pode estar vazio.")
      .bail();
  }
  private static validateAddressComplement(): ValidationChain {
    return body("address.complement")
      .optional()
      .trim().escape()
      .notEmpty({ ignore_whitespace: true })
      .withMessage("O campo complemento não pode estar vazio")
      .bail();
  }
  private static validateAddressRefPoint(): ValidationChain {
    return body("address.refPoint")
      .optional()
      .trim().escape()
      .notEmpty({ ignore_whitespace: true })
      .withMessage("O ponto de referência não pode estar vazio.");
  }

  static validateFields(): ValidationChain[] {
    return [
      this.validateFirstName(),
      this.validateLastName(),
      this.validateEmail(),
      this.validateContact(),
      this.validateContactDDD(),
      this.validateContactNumber(),
      this.validateCPF(),
      this.validateBirthDay(),
      this.validateAddress(),
      this.validateAdrressCep(),
      this.validateAddressStreet(),
      this.validateAddressNumber(),
      this.validateAddressComplement(),
      this.validateAddressRefPoint(),
    ];
  }
}
