export default class propertyInfo
{
    constructor(propertyType, 
                propertyRegNum, 
                description,
                areaSqft,
                furnishedStatus,
                numberOfFloors,
                propertyAge,
                address, 
                price, 
                city, 
                location, 
                categoryType,
                propertyStatus,
                featured,
                agencyId,
                agencyName,
                agencyPhoneNumber,
                agencyAddress,
                images,
                )
    {
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
        this.propertyStatus = propertyStatus;
        this.featured = featured;
        this.agencyId = agencyId;
        this.agencyName = agencyName;
        this.agencyPhoneNumber = agencyPhoneNumber;
        this.agencyAddress = agencyAddress;
        this.images = images;
    }

}