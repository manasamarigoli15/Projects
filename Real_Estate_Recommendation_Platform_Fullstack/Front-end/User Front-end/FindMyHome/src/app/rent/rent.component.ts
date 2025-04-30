import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import propertyInfo from '../model/propertyInfo';
import Requests from '../model/request';
import { PropertydisplayService } from '../services/propertydisplay.service';
import { RequestService } from '../services/request.service';

@Component({
  selector: 'app-rent',
  templateUrl: './rent.component.html',
  styleUrls: ['./rent.component.css']
})
export class RentComponent {
  rentproperty:propertyInfo[]=[];
  propertyid:number | undefined;
  res:Requests=new Requests(0);
  constructor (private http:HttpClient, 
    private propertydisplayservice: PropertydisplayService,
    private requestService:RequestService)
               {this.propertydisplayservice
                .getCategoryType("3 ").subscribe(a => this.rentproperty =a )
          console.debug(this.rentproperty) }
                onrequest(id:any){
                  this.res.propertyid=id
                  this.requestService.sendrequest(this.res).subscribe(d=>console.debug(d))
                }
}
