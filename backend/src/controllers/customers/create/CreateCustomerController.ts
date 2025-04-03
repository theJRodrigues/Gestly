import { ICustomer } from "@models";
import {
  CreateCustomerDTO,
  ICreateCustomerController,
  ICreateCustomerRepository,
  IErrorResponse,
  IHttpResponse,
  statusCode,
} from "@protocols";
import { ValidateUniqueCustomerService } from "@services";

export class CreateCustomerController implements ICreateCustomerController {
  constructor(
    private readonly repository: ICreateCustomerRepository
  ) {}
  
  async create(customer: CreateCustomerDTO): Promise<IHttpResponse<ICustomer | IErrorResponse>> {
    try {
      const validateNotUniqueness = 
      new ValidateUniqueCustomerService(this.repository)
      
      const isNotUnique = 
      await validateNotUniqueness.notUnique(customer);
      
      if (isNotUnique) {
        return isNotUnique;
      }

      const newCustomer = 
      await this.repository.create(customer);
      
      return {
        statusCode: statusCode.Created,
        body: newCustomer,
      };
    
    } catch (error) {
      return {
        statusCode: statusCode.InternalServerError,
        body: {
          error: "Ocorreu um erro ao tentar criar o usuário no banco de dados "}
        }
    }
  }
}
