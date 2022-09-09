const email_reg = new RegExp("[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}");
const passwrod_reg = new RegExp('^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[~@#$%^&*+=`|{}:;!.?\\"()\\[\\]-])[\\w~@#$%^&*+=`|{}:;!.?\\"()\\[\\]-]{8,24}$');
export enum SubscriptionTypes {
    individual = 'individual',
    enterprise = 'enterprise'
}

export class Password {

    constructor (public password:string)
    {
        if (!passwrod_reg.test(password))
        {
            throw "Weak Password : Should Contain UpperCase, Lower Case, Special Caracter, number";
        }
    }

    confirm_password(confirming_password :string){
        if (confirming_password !== this.password )
            throw "Make sure the confirmed password is correct !";
    }
}

export class Email {
    constructor (public email:string)
    {
        if (!email_reg.test(email))
        {
            throw new Error("not an Email adress");
        }
    }
}

export interface Inventory{
    name?:string
    description?:string
    belongs_to?:string
}

export class User{
    constructor (public email?:Email, public firstname?:string ,public lastname?:string,
        public password?:Password,public active?:boolean,public email_confirmed?:boolean,
        public store?:string,public roles?:string[])
    {

    }
}

export class Store {
    constructor (public name:string,public subscriptionType:SubscriptionTypes,public subscriptionEnd?:Date)
    {
    }
}

export const rolesTitles= {
    "admin" : (store_id:string) : string => `${store_id}:store:admin`,
    "manager" : (store_id :string) :string => `${store_id}:store:manager`,
    "inventory_manager" : (inventory_id :string) => `${inventory_id}:inventory:manager`,
    "inventory_read": (inventory_id :string) => `${inventory_id}:inventory:read`,
    "inventory_modify" : (inventory_id :string) => `${inventory_id}:inventory:modify`,
    "inventory_delete" : (inventory_id:string) => `${inventory_id}:inventory:delete` 
}