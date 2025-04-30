import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import propertyInfo from '../model/propertyInfo';
import { PropertydisplayService } from '../services/propertydisplay.service';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css']
})
export class PropertyDetailsComponent {
  abc:string="";
  Property:propertyInfo[]=[];
  constructor(private route:ActivatedRoute, private propertyservice: PropertydisplayService) {
        route.params.subscribe((param:any)=>
        {
        propertyservice.getPropertyById(param.id).subscribe(d=>this.Property[0]=d);
        console.debug(this.Property);
        });
     } 
}
