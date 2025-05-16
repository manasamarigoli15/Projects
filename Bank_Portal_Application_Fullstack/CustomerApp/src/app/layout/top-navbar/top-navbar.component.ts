import { Component } from '@angular/core';
import User from 'src/app/models/user';
import { NotificationsService } from 'src/app/services/notifications.service';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.css']
})
export class TopNavbarComponent {
  user: User = new User("","","","","","",0,"","","",0,"","","");
  notification : any = [];
  notiCount : number = 0;
  loginStatus : boolean = false;

  constructor(private profileService: ProfileService, private notificationService: NotificationsService){

    var r = this.profileService.getUser();
    r.subscribe(d => {
      this.user = d;
      console.debug(this.user);
      var s = this.notificationService.fetchNotifications();
      s.subscribe(e => {console.debug(e);
        this.notification = e;
        this.notiCount = this.notification.length;
        console.debug(this.notiCount);
      })
    });

    if(sessionStorage.getItem("Token")) {
      this.loginStatus = true;
    }
    else {
      this.loginStatus = false;
    }
  }
  
  onLogout() {
    sessionStorage.removeItem("Token");
  }
}
