import mongoose, { Schema } from "mongoose";

export interface IAccounts {
  firsname: string;
  lastname: string;
  email: string;
  password: string;
}

const emailRegex =
  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

const passRegex =
  /^(?=.*\p{Ll})(?=.*\p{Lu})(?=.*\d)(?=.*[@$!%*?&])[A-Za-zÀ-ÖØ-öø-ÿ\d@$!%*?&]{8,30}$/u;

const accountsSchema = new Schema<IAccounts>(
  {
    firsname: { type: String, required: true, minlength: 1 },
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
  }
);

const Accounts = mongoose.model<IAccounts>("Accounts", accountsSchema);

export default Accounts;
