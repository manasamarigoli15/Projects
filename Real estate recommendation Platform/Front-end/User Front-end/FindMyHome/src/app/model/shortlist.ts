import propertyInfo from "./propertyInfo";


export default class Shortlists{
    propertyid:number=0;
    propertyshortlist:propertyInfo|undefined;
    

    constructor(propertyid:number
        ,propertyshortlist:propertyInfo|undefined
       
        )
        {
        this.propertyid=propertyid;
        this.propertyshortlist=propertyshortlist;
        
    }
}