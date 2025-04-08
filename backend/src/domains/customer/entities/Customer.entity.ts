import { CustomerDTO, IAddress, IContact } from "@domains/customer";

export class Customer {
    readonly id?: string
    readonly firstname: string
    readonly lastname: string
    readonly email: string
    readonly contact: IContact
    readonly cpf: string
    readonly birthDate: Date
    readonly address: IAddress

    constructor(customer: CustomerDTO) {
        this.id = customer.id;
        this.firstname = customer.firstname;
        this.lastname = customer.lastname;
        this.email = customer.email;
        this.contact = customer.contact;
        this.cpf = customer.cpf;
        this.birthDate = customer.birthDate;
        this.address = customer.address;
    }

}