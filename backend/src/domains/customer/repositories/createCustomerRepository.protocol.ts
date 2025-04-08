import { CustomerDTO } from "@domains/customer";

export interface ICreateCustomerRepository {
    findByCPF(cpf: string): Promise<CustomerDTO | null>;
  
    findByEmail(email: string): Promise<CustomerDTO | null>;
  
    create(customer: CustomerDTO): Promise<CustomerDTO>;
  }