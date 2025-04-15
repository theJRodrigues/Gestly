import { CustomerDTO, IAddress, IContact } from "@domains/customer";

export class Customer {
  private _id?: string;
  private _accountIdRef?: string;
  private _firstname: string;
  private _lastname: string;
  private _email: string;
  private _contact: IContact;
  private _cpf: string;
  private _birthDate: Date;
  private _address: IAddress;

  constructor(customer: CustomerDTO) {
    this._id = customer.id;
    this._accountIdRef = customer.accountIdRef;
    this._firstname = customer.firstname;
    this._lastname = customer.lastname;
    this._email = customer.email;
    this._contact = customer.contact;
    this._cpf = customer.cpf;
    this._birthDate = customer.birthDate;
    this._address = customer.address;
  }

  toObject(): CustomerDTO {
    const customer: CustomerDTO ={
      firstname: this._firstname,
      lastname: this._lastname,
      email: this._email,
      contact: this._contact,
      cpf: this._cpf,
      birthDate: this._birthDate,
      address: this._address,
    };
    if(this._id){
      customer.id = this._id;
    }
    if(this._accountIdRef){
      customer.accountIdRef = this._accountIdRef;
    }
    return customer;
  }

  getFullName(): string {
    return `${this.firstname} ${this.lastname}`;
  }

  get id(): string | undefined {return this._id;}
  get accountIdRef(): string | undefined {return this._accountIdRef;}
  get firstname(): string {return this._firstname;}
  get lastname(): string {return this._lastname;}
  get email(): string {return this._email;}
  get contact(): IContact {return this._contact;}
  get cpf(): string {return this._cpf;}
  get birthDate(): Date {return this._birthDate;}
  get address(): IAddress {return this._address;}
  
}
