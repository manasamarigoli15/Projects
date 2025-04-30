import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { UserLogin } from '../model/userLogin';
import { userSignUp } from '../model/userSignUp';
import { SignupService } from '../services/signup.service';

@Component({
  selector: 'app-user-sign-up',
  templateUrl: './user-sign-up.component.html',
  styleUrls: ['./user-sign-up.component.css']
})
export class UserSignUpComponent {
  ngOnInit(): void {
  }
  createUser(user:UserLogin){
    console.log(user)
  }

  constructor(private signupService:SignupService
    , private route: Router) {}

    users: userSignUp[] = [];
    tempUser: userSignUp = new userSignUp();

  AddUser() : void
  {
    console.debug(this.tempUser);
    this.signupService.createUser(this.tempUser)
      .subscribe(d => {this.users.push(d); console.debug(d);});
      
    
    if(this.users != null)
    {
      alert("Registeration successful");
      this.route.navigateByUrl("/login");
    }
    else
    {
      alert("You need to register first");
      this.route.navigateByUrl("/signup");
    }

    //reset
    this.tempUser = new userSignUp();
  }

}
