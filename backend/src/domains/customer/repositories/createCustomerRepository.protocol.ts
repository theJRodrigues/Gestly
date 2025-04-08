import { CustomerDTO } from "@domains/customer";

export interface ICreateCustomerRepository {
    findByCPF(cpf: string): Promise<boolean>;
  
    findByEmail(email: string): Promise<boolean>;
  
    create(customer: CustomerDTO): Promise<CustomerDTO>;
  }