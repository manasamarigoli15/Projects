import { Component } from '@angular/core';
import propertyInfo from '../model/propertyInfo';
import { searchFilter } from '../model/searchFilter';
import { PropertydisplayService } from '../services/propertydisplay.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  sf:searchFilter = new searchFilter("","","");
  searchTerm: string = "";
  property: propertyInfo[] = [];
  type:string="All";
  status:string="All";
  constructor( private propservice: PropertydisplayService) {
    let r = this.propservice.getProperty();
    r.subscribe(d => this.property = d);
  }

  searchfilterfun():void{
    console.debug(this.sf);
      let r = this.propservice.getsearchfilter(this.sf);
      r.subscribe(d => {this.property = d; console.debug(d)});
      this.property=this.property.filter(d=>d.city?.toLocaleLowerCase().includes(this.sf.city.toLowerCase()));
  }

  // searchfunction(): void {
    
  //   let r = this.propservice.getCity(this.searchTerm);
  //   r.subscribe(d => this.property = d);
  //   console.debug(this.property);
  // }
  // filterByPropertyType() : void {
  //   if(this.type == "All")
  //   {
  //   let r = this.propservice.getProperty();
  //    r.subscribe(d => this.property = d);
  //   }
  //   else{
  //        let r = this.propservice.getPropertyType(this.type);
  //        r.subscribe(d => this.property = d);
  //   }
  // }

  // filterByFurnishedStatus() : void {
  //   if(this.status == "All" && this.type=="All")
  //   {
  //   let r = this.propservice.getProperty();
  //    r.subscribe(d => this.property = d);
  //   }
  //   else{
  //        let r = this.propservice.getFurnishedStatus(this.status);
  //        r.subscribe(d => this.property = d);
  //   }
  // }
  
}
