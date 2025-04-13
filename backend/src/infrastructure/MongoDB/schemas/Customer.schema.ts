import { CustomerDTO } from "@domains/customer";
import { isValidObjectId, Schema } from "mongoose";

const emailRegex =
  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
export const customerSchema = new Schema<CustomerDTO>(
  {
    accountIdRef: {
      type: String,
      required: true,
      validate: { validator: isValidObjectId },
    },
    firstname: { type: String, required: true, minlength: 1, maxlength: 30 },
    lastname: { type: String, required: true, minlength: 1, maxlength: 30 },
    email: { type: String, required: true, match: emailRegex, unique: true },
    contact: {
      DDD: { type: String, required: true, minlength: 2, maxlength: 2 },
      number: { type: String, required: true, minlength: 9, maxlength: 9 },
    },
    cpf: {
      type: String,
      required: true,
      minlength: 11,
      maxlength: 11,
      unique: true,
    },
    birthDate: { type: Date, required: true },
    address: {
      cep: { type: String, required: true, minlength: 8, maxlength: 8 },
      street: { type: String, required: true },
      number: { type: String, required: true },
      complement: { type: String, required: false },
      refPoint: { type: String, required: false },
    },
  },
  {
    timestamps: true,
    collection: "Customers",
    toObject: {
      transform(_doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
        delete ret.accountIdRef;
      },
    },
  }
);
