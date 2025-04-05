import mongoose, { Schema } from "mongoose";

export interface IAccount {
  id: string
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}

const emailRegex =
  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

const passRegex =
  /^(?=.*\p{Ll})(?=.*\p{Lu})(?=.*\d)(?=.*[@$!%*?&])[A-Za-zÀ-ÖØ-öø-ÿ\d@$!%*?&]{8,30}$/u;

const accountsSchema = new Schema<IAccount>(
  {
    firstname: { type: String, required: true, minlength: 1 },
    lastname: { type: String, required: true, minlength: 1 },
    email: { type: String, required: true, match: emailRegex, unique: true },
    password: {
      type: String,
      required: true,
      minlength: 8,
      maxlength: 30,
      match: passRegex,
    },
  },
  {
    timestamps: true,
    collection: "Accounts",
    toJSON: {
      transform: (_doc, ret) => {
          ret.id = ret._id; 
          delete ret._id; 
          delete ret.__v; 
      },
  }
}
);

export const Account = mongoose.model<IAccount>("Accounts", accountsSchema);
