import { AccountDTO } from "@domains/account";
import { Schema } from "mongoose";

const emailRegex =
  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

const passRegex =
  /^(?=.*\p{Ll})(?=.*\p{Lu})(?=.*\d)(?=.*[@$!%*?&])[A-Za-zÀ-ÖØ-öø-ÿ\d@$!%*?&]{8,30}$/u;

export const accountSchema = new Schema<AccountDTO>(
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