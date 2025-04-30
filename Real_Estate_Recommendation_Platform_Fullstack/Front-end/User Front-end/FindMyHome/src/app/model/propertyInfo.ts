import { Agency } from "./agency";
import Image from "./Image";

export default class propertyInfo
{
    id:number=0;
    propertyType:string = "";
    propertyRegNum:string = "";
    description:string = "";
    areaSqft:string = "";
    furnishedStatus:string = "";
    numberOfFloors:string = "";
    propertyAge:string = "";
    address:string = "";
    price:string = "";
    city:string = "";
    location:string = "";
    categoryType:string = "";
    //  agencyInfo:Agency | undefined;
    agencyId:string = "";
    agencyName:string ="";
    agencyPhoneNumber:string = "";
    agencyAddress:string = "";
    images:Image[]=[];
    propertyStatus:string = "";
    featured:string = "";
    constructor(
                id:number,
                propertyType:string,
                propertyRegNum:string,
                description:string,
                areaSqft:string,
                furnishedStatus:string,
                numberOfFloors:string,
                propertyAge:string,
                address:string,
                price:string,
                city:string,
                location:string,
                categoryType:string,
                // agencyInfo:Agency,
                agencyId:string,
                agencyName:string,
                agencyPhoneNumber:string,
                agencyAddress:string,
                images:Image[]=[],
                propertyStatus:string,
                featured:string
                )
    {
        this.id=id;
        this.propertyType = propertyType;
        this.propertyRegNum = propertyRegNum;
        this.description = description;
        this.areaSqft = areaSqft;
        this.furnishedStatus = furnishedStatus;
        this.numberOfFloors = numberOfFloors;
        this.propertyAge = propertyAge;
        this.address = address;
        this.price = price;
        this.city = city;
        this.location = location;
        this.categoryType = categoryType;
        // this.agencyInfo = agencyInfo;
        this.agencyId = agencyId;
        this.agencyName = agencyName;
        this.agencyPhoneNumber = agencyPhoneNumber;
        this.agencyAddress = agencyAddress;
        this.images = images;
        this.propertyStatus = propertyStatus;
        this.featured = featured;
    }
}