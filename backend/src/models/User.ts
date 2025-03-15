import mongoose,{Schema} from "mongoose";

interface IUser{
    name: string,
    surname: string,
    email: string,
    password: string,
}


const emailRegex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/ ;
const senhaRegex = /^(?=.*\p{Ll})(?=.*\p{Lu})(?=.*\d)(?=.*[@$!%*?&])[A-Za-zÀ-ÖØ-öø-ÿ\d@$!%*?&]{8,30}$/u;

const userSchema = new Schema<IUser>({
    name: {type: String, required: true, minlength:1 },
    surname: {type: String, required: true, minlength:1 },
    email: {type: String, required: true, match: emailRegex},
    password: {type: String, required: true, minlength:8, maxlength: 30 , match: senhaRegex},
},
{
    timestamps: true
})

const User = mongoose.model("User", userSchema)

export default User