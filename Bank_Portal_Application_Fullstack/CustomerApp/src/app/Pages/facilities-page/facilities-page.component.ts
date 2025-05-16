import { Component } from '@angular/core';
import { FacilitiesService } from 'src/app/services/facilities.service';
import swal from 'sweetalert2';


@Component({
  selector: 'app-facilities-page',
  templateUrl: './facilities-page.component.html',
  styleUrls: ['./facilities-page.component.css']
})
export class FacilitiesPageComponent {
    public facilities:Array<any> = [];

  constructor(private facilityService : FacilitiesService) {}

  onApply() : void{
    console.debug(this.facilities);
    if(this.facilities.length == 0) {
      swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: "Please select atleast one!"});
    }

    if(this.facilities.length != 0) {
    var r = this.facilityService.apply(this.facilities);
    
    r.subscribe(d => {
      swal.fire('Hurray',"Applied Successfully!",'success');
    });
  }
  }

  selected_checkBox(event:any) {
    //this.selected_checkbox[event.target.name] = event.target.checked;
    this.facilities.push({ Type : Number(event.target.value)});
    //this.temp.DebitCard = event.target.checked;
 }


}
