import { Component } from '@angular/core';
import { userProfile } from '../model/userProfile';
import { UserprofileService } from '../services/userprofile.service';


@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent {

  user: userProfile = new userProfile("","","","","");

constructor(private userprofileservice:UserprofileService) {

var r = this.userprofileservice.getUser();
    r.subscribe(d => {
      this.user = d;
      console.debug(this.user);
    });
  }

}
