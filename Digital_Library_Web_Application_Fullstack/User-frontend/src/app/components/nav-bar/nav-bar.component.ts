import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserProfile } from 'src/app/models/userprofile';
import { UserprofileService } from 'src/app/services/userprofile.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  user: UserProfile = new UserProfile("","","","","");

  constructor(private http: HttpClient,
    private userprofileservice: UserprofileService,
    private route: Router
  ) {
    var r = this.userprofileservice.getUser();
    r.subscribe(d => {
      this.user = d;
      console.debug(this.user);
    });
  }

  loggedIn() {
    return sessionStorage.getItem("Token");
  }

  logout() {
    sessionStorage.removeItem("Token");
    Swal.fire('You just Logged Out', ' ', 'info')
    this.route.navigateByUrl("/");
  }

}
