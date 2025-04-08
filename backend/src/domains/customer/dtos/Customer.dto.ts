export interface IAddress {
    cep: string;
    street: string;
    number: string;
    complement?: string;
    refPoint?: string;
  }
  
export interface IContact {
    DDD: string;
    number: string;
  }
export interface CustomerDTO{
        id?: string;
        firstname: string;
        lastname: string;
        email: string;
        contact: IContact;
        cpf: string;
        birthDate: Date;
        address: IAddress;
}