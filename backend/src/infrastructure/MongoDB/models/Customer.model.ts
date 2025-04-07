import mongoose, { Schema } from "mongoose";

interface IAddress {
  cep: string;
  street: string;
  number: string;
  complement?: string;
  refPoint?: string;
}

interface IContact {
  DDD: string;
  number: string;
}

export interface ICustomer {
  id: string,
  firstname: string;
  lastname: string;
  email: string;
  contact: IContact;
  cpf: string;
  birthDate: Date;
  address: IAddress;
}

const Customer = mongoose.model("Customer", customerSchema);

export default Customer;
