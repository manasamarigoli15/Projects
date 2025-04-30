export class searchFilter {
    city : string ="";
    propertyType : string ="";
    furnishedStatus : string ="";

    constructor(city:string, propertyType:string, furnishedStatus:string)
    {
        this.city = city;
        this.propertyType = propertyType;
        this.furnishedStatus = furnishedStatus;
    }
}