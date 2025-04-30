import { Component } from '@angular/core';
import propertyInfo from '../model/propertyInfo';
import { PropertydisplayService } from '../services/propertydisplay.service';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent {
  Property: propertyInfo[] = [];
  constructor(private propertyservice: PropertydisplayService) {
    propertyservice.getCategoryType("2").subscribe(d => this.Property = d);
    console.debug(this.Property);
}

}
