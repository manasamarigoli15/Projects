import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  email : string | undefined;
  password : string | undefined;
  errorMessage = false;
  successMessage = false;

  constructor(private loginService: LoginService,private route:Router) { }

  onLoginClick(): void {
    this.errorMessage= false;
     var r = this.loginService.login({email:this.email, password:this.password});
     r.subscribe(d => {
      sessionStorage.setItem("Token",d.token);
      this.successMessage=true;
      //Swal.fire('Hurray!','Logged In successfully!','success')
      this.route.navigateByUrl("/home");
    },(error)=>{this.errorMessage=true;}, );
  }

}
