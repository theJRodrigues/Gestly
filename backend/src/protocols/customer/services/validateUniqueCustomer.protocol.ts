import { 
CreateCustomerDTO, 
IErrorResponse, 
IHttpResponse 
} from "@protocols";

export interface IValidateUniqueCustomerService {
  notUnique(
    customer: CreateCustomerDTO
  ): Promise<IHttpResponse<IErrorResponse> | void>;
}
