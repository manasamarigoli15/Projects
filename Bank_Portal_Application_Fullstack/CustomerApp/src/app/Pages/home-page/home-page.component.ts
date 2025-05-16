import { Component } from '@angular/core';
import User from 'src/app/models/user';
import { ProfileService } from 'src/app/services/profile.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  user: User = new User("","","","","","",0,"","","",0,"","","");
  constructor(private profileService: ProfileService){
    var r = this.profileService.getUser();
    r.subscribe(d => {
      this.user = d;
      console.debug(this.user);
    });
  }
}

