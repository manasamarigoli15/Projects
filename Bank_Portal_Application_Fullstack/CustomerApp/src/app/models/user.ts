export default class User {
    registrationId: string|undefined;
    accountNumber: string|undefined;
    firstName:string|undefined;
    lastName:string|undefined;
    email:string|undefined;
    password:string|undefined;
    phoneNumber: string|undefined;
    gender:string|undefined;
    address:string|undefined;
    aadharNumber: number|undefined;
    panNumber: string|undefined;
    dateOfBirth:string|undefined;
    occupation:string|undefined;
    accountType:number|undefined;
    totalBalance:number=0;
    profileImg:string="";
    adharImg:string="";
    panImg:string="";


    constructor(firstName:string,lastName:string,email:string,phoneNumber:string,gender:string,address:string,
        aadharNumber:number, panNumber:string, dateOfBirth:string,occupation:string,accountType:number,
        profileImg:string,adharImg:string,panImg:string) {
        this.firstName = firstName;
        this.lastName =  lastName;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.gender = gender;
        this.address = address;
        this.aadharNumber = aadharNumber;
        this.panNumber = panNumber;
        this.dateOfBirth = dateOfBirth;
        this.occupation = occupation;
        this.accountType = accountType;
        this.profileImg=profileImg;
        this.adharImg=adharImg;
        this.panImg=panImg;
    }
}