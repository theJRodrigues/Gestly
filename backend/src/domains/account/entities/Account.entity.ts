import {AccountDTO} from '@domains/account'


export class Account{
    id?: string;
    firstname: string;
    lastname: string;
    email: string;
    password: string;

    constructor(account:AccountDTO){
        this.id = account.id;
        this.firstname = account.firstname;
        this.lastname = account.lastname;
        this.email = account.email;
        this.password = account.password;
    }
}