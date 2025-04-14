import {AccountDTO} from '@domains/account'
import bcrypt from "bcrypt"
import { IAccount } from './account.protocol';

export class Account implements IAccount{
    private _id?: string;
    private _firstname: string;
    private _lastname: string;
    private _email: string;
    private _password: string;

    constructor(account:AccountDTO){
        this._id = account.id;
        this._firstname = account.firstname;
        this._lastname = account.lastname;
        this._email = account.email;
        this._password = account.password;
    }
    

    toObject(): AccountDTO {
        const accountObject: AccountDTO = {
            firstname: this._firstname,
            lastname: this._lastname,
            email: this._email,
            password: this._password,
        }
        if (this._id) {
            accountObject.id = this._id;
        }
        return accountObject;
    }

    async hashPassword(): Promise<void> {
        const salt = 11
        this._password = await bcrypt.hash(this._password, salt);    
    }
    
    get id(): string | undefined {   
        return this._id;
    }
    get firstname(): string {
        return this._firstname;
    }           
    get lastname(): string {
        return this._lastname;
    }
    get email(): string {
        return this._email;
    }
    get password(): string {
        return this._password;
    }
}