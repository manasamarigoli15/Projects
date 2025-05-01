import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { Login } from 'src/app/models/login';
import { SignUp } from 'src/app/models/sign-up';
import { SignupService } from 'src/app/services/signup.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  ngOnInit(): void {}

  createUser(user:Login){
    console.log(user)
  }

  constructor(private signupService: SignupService,
              private route: Router) {}

  users: SignUp[] = [];
  tempUser: SignUp = new SignUp();

  AddUser() : void
  {
    console.debug(this.tempUser);
    this.signupService.createUser(this.tempUser)
    .subscribe(d => {this.users.push(d); console.debug(d);});

      if(this.users != null)
      {
        Swal.fire('Registration successful!',' ','success');
        // alert("Registration successful!");
        this.route.navigateByUrl("/login");
      }
      else
      {
        Swal.fire('You need to register first',' ','info');
        this.route.navigateByUrl("/signup");
      }

      //reset
      this.tempUser = new SignUp();
  }
}
