import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import propertyInfo from '../model/propertyInfo';
import Requests from '../model/request';
import Shortlists from '../model/shortlist';
import { PropertydisplayService } from '../services/propertydisplay.service';
import { RequestService } from '../services/request.service';
import { ShortlistService } from '../services/shortlist.service';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent {
  buyproperty:propertyInfo[]=[];
  propertyid:number | undefined;
  res:Requests=new Requests(0);
  short:Shortlists=new Shortlists(0,undefined);

  constructor (private http:HttpClient, 
    private propertydisplayservice: PropertydisplayService,
    private requestService:RequestService,
    private shortlistService:ShortlistService)
               {this.propertydisplayservice
                .getCategoryType("1").subscribe(a => this.buyproperty =a )
          console.debug(this.buyproperty) }

                onrequest(id:any){
                  this.res.propertyid=id;
                  this.requestService.sendrequest(this.res).subscribe(d=>console.debug(d));
                }

                onshortlist(id:any){
                  this.short.propertyid=id
                  this.shortlistService.sendshortlist(this.short).subscribe(d=>console.debug(d))
                }
}
