export class Agency
{
    id:number|undefined;
    agencyId:string|undefined;
    agencyName:string|undefined;
    agencyAddress:string|undefined;
    agencyPhoneNumber:string|undefined;

    constructor(agencyId:string,agencyName:string,agencyAddress:string,agencyPhoneNumber:string,id:number){

        this.id = id;
        this.agencyId = agencyId;
        this.agencyName = agencyName;
        this.agencyAddress = agencyAddress;
        this.agencyPhoneNumber = agencyPhoneNumber;

    }

}