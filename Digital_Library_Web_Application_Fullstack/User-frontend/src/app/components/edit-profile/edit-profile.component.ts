import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserProfile } from 'src/app/models/userprofile';
import { UserprofileService } from 'src/app/services/userprofile.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent {

  profile:UserProfile = new UserProfile("","","","","");

  constructor(private editprofileservice:UserprofileService,
              private route:Router
            ) 
              {
                var r = this.editprofileservice.getUser();
                r.subscribe(d => {
                  this.profile = d;
                  console.debug(this.profile);
                });
              }

              
              Profile:UserProfile[]=[];
              newpassword:string = '';

              update(){
                this.profile.password=this.newpassword;
                this.editprofileservice.updateUser(this.profile).subscribe(d=>this.Profile.push(d));
                Swal.fire('Updated Successfuly!',' ','success');
              }
}
