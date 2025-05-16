import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import User from 'src/app/models/user';
import { ProfileService } from 'src/app/services/profile.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})

export class EditProfileComponent implements OnInit {
  user: User = new User("","","","","","",0,"","","",0,"","","");
  User: User[]=[];

  constructor(private profileService: ProfileService, private route:Router) { }
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
    swal.fire('Updated','Profile updated successfully!','success');
      // Show success message
    }
}