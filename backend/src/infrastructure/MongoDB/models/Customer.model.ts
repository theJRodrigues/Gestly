import {model} from "mongoose";
import { customerSchema } from "../schemas";

export const CustomerModel = model("Customer", customerSchema);

