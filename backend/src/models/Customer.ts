import mongoose, { Schema } from "mongoose";

interface IAddress {
  cep: string;
  street: string;
  number: string;
  complement?: string;
  refPoint?: string;
}

interface IPhone {
  DDD: string;
  phoneNumber: string;
}

interface ICustomer {
  name: string;
  lastname: string;
  email: string;
  contact: IPhone;
  cpf: string;
  birthDate: Date;
  address: IAddress;
}
const emailRegex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/ ;
const customerSchema = new Schema<ICustomer>({
  name: { type: String, required: true, minlength: 1, maxlength: 30 },
  lastname: { type: String, required: true, minlength: 1, maxlength: 30 },
  email: { type: String, required: true, match: emailRegex },
  contact: {
    DDD: { type: String, required: true, minlength: 2, maxlength: 3 },
    phoneNumber: { type: String, required: true, minlength: 8, maxlength: 11 },
  },
  cpf: { type: String, required: true, minlength: 11, maxlength: 11 },
  birthDate: { type: Date, required: true },
  address: {
    cep: { type: String, required: true, minlength: 8, maxlength: 8},
    street: { type: String, required: true },
    number: { type: String, required: true },
    complement: { type: String, required: false },
    refPoint: { type: String, required: false },
  },
},
{
  timestamps: true,
  collection: "Costumers"
});

const Customer = mongoose.model("Cliente", customerSchema);

export default Customer;
