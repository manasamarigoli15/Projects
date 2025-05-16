
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import User from 'src/app/models/user';
import { ProfileService } from 'src/app/services/profile.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {
  user: User = new User("","","","","","",0,"","","",0,"","","");
  User: User[]=[];
  constructor(private profileService: ProfileService,private route:Router) { }
  async ngOnInit() {
    // Retrieve the user's profile information from the server
    var user= await this.profileService.getUser();
    user.subscribe(d => {
    this.user = d;
    });
  }
  onSubmit() {
    this.profileService.updateProfile(this.user).subscribe(
    response =>this.User.push(response));
    swal.fire('Done!','Password Updated Successfully!','success')
    // Show success message
  }
}