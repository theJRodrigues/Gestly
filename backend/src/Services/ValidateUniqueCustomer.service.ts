import { 
CreateCustomerDTO, 
ICreateCustomerRepository, 
IErrorResponse, 
IHttpResponse, 
statusCode,
IValidateUniqueCustomerService } from "@protocols";

export class ValidateUniqueCustomerService implements IValidateUniqueCustomerService {
  constructor(private readonly repository: ICreateCustomerRepository) {}

  async notUnique(customer: CreateCustomerDTO): Promise<IHttpResponse<IErrorResponse> | void> {
    try {
        const isCreatedByCPF = await this.repository.existsByCPF(customer);
        if (isCreatedByCPF) {
          const message = "Já existe um cadastro com o CPF informado." ;
          return { 
            statusCode: statusCode.Conflict, 
            body: {error: message} 
          };
        }
    
        const isCreatedByEmail = await this.repository.existsByEmail(customer);
        if (isCreatedByEmail) {
          const message = "Já existe um cadastro com o Email informado.";
          return { 
            statusCode: statusCode.Conflict, 
            body:{error:message }  
          };
        }
        return
    } catch (error) {
        const message = "Ocorreu um erro ao validar a unicidade do cliente no banco de dados.";
        return {
          statusCode: statusCode.InternalServerError, 
          body: {error: message}
        };
    }
  }
}