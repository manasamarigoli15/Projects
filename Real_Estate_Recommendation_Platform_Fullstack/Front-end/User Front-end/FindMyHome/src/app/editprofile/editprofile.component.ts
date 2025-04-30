import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { userProfile } from '../model/userProfile';
import { UserprofileService } from '../services/userprofile.service';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent {

  profile:userProfile = new userProfile("","","","","");

  constructor(private editprofileservice:UserprofileService,
              private routes:Router,
              private route : ActivatedRoute) 
              {
                var r = this.editprofileservice.getUser();
                r.subscribe(d => {
                  this.profile = d;
                  console.debug(this.profile);
                });
              }

              
              Profile:userProfile[]=[];
              newpassword:string = '';

              update(){
                this.profile.password=this.newpassword;
                this.editprofileservice.updateUser(this.profile).subscribe(d=>this.Profile.push(d));
                alert("Updated successfully");
              }

}
