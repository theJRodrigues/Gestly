import { Customer, CustomerDTO } from "@domains/customer";

export interface ICreateCustomerRepository {
    findByCPF(cpf: string): Promise<Customer | null>;
  
    findByEmail(email: string): Promise<Customer | null>;
  
    create(customer: CustomerDTO): Promise<Customer>;
  }