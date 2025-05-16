import { Component } from '@angular/core';
import User from 'src/app/models/user';
import { ProfileService } from 'src/app/services/profile.service';


@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent {
  user: User = new User("","","","","","",0,"","","",0,"","","");

  constructor(private profileService: ProfileService){
    var r = this.profileService.getUser();
    r.subscribe(d => {
      this.user = d;
      console.debug(this.user);
    });
  }

}
