import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import propertyInfo from '../model/propertyInfo';
import shortlist from '../model/shortlist';
import { PropertydisplayService } from '../services/propertydisplay.service';
import { ShortlistService } from '../services/shortlist.service';

@Component({
  selector: 'app-shortlist',
  templateUrl: './shortlist.component.html',
  styleUrls: ['./shortlist.component.css']
})
export class ShortlistComponent {

    shortlistproperty:shortlist[]=[];
    

  constructor(private route:ActivatedRoute, private propertyservice: PropertydisplayService,
    private shortlistService:ShortlistService) {
    
    
    var shortlists = this.shortlistService.getshortlist();

    shortlists.subscribe(d => {
      this.shortlistproperty = d;
      console.debug(this.shortlistproperty);
    });

     } 
     
     ondelete(id:number|undefined) : void
   {
       this.shortlistService.deleteshortlist(id)
                        .subscribe(d => 
                            this.shortlistproperty = this.shortlistproperty.
                            filter(d => d.propertyid != id)
                          );
   }
}
