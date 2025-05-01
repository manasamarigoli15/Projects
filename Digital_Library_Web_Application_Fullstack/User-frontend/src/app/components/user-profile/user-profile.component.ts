import { Component } from '@angular/core';
import { UserProfile } from 'src/app/models/userprofile';
import { UserprofileService } from 'src/app/services/userprofile.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {

  user: UserProfile = new UserProfile("","","","","");

constructor(private userprofileService:UserprofileService) {

var r = this.userprofileService.getUser();
    r.subscribe(d => {
      this.user = d;
      console.debug(this.user);
    });
  }
}
