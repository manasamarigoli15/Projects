export class userProfile 
{
    name : string = "";
    email : string = "";
    password : string = "";
    phoneNumber : string = "";
    address : string = "";


    constructor(name:string,email:string,password:string,phoneNumber:string,address:string)
    {
        this.name = name;
        this.email = email;
        this.password = password;
        this.phoneNumber = phoneNumber;
        this.address = address;
    }
}