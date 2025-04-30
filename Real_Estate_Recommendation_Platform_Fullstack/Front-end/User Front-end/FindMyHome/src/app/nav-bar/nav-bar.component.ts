import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { userProfile } from '../model/userProfile';
import { AuthService } from '../services/auth.service';
import { UserprofileService } from '../services/userprofile.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  user: userProfile = new userProfile("","","","","");
  
  constructor(private http:HttpClient, 
              private route: Router, 
              private authService: AuthService,
              private userprofileservice: UserprofileService) {

                var r = this.userprofileservice.getUser();
    r.subscribe(d => {
      this.user = d;
      console.debug(this.user);
    });
              }

  loggedin()
  {
    return sessionStorage.getItem("Token");
  }

  logout()
  {
    sessionStorage.removeItem("Token");
    Swal.fire('You just Logged Out')
    this.route.navigateByUrl("/");
  }

}
