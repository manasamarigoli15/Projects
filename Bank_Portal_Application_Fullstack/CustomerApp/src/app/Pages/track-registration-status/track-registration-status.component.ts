import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-track-registration-status',
  templateUrl: './track-registration-status.component.html',
  styleUrls: ['./track-registration-status.component.css']
})
export class TrackRegistrationStatusComponent {
  regNo : string = "";
  constructor(private route:Router ){}
  onTrack(regNo : any) {
    this.regNo = regNo;
    console.debug(this.regNo);
    this.route.navigateByUrl(`/registrationstatus/${this.regNo}`);
  }

}
