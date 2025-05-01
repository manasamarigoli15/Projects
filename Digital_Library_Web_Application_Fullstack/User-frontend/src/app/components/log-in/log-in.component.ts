import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {
  ngOnInit(): void {
  }
  createUser(user:Login){
    console.log(user);
  }

  constructor(private http:HttpClient, private authService:AuthService,private route: Router) {}

  email: string = "";
  password: string = "";

  onLogin() : void{
    console.debug("clicked");
    this.authService.login(this.email,this.password).subscribe((d:any)=>{
     sessionStorage.setItem("Token",d.token);
     if(sessionStorage.getItem("Token"))
     {
      //  alert("Login successful");
      Swal.fire('Login Successful','Get Going!','success');
      this.route.navigateByUrl("/");
     }

    },(error: any)=> {
      console.debug(error);
      // alert(error.error)
      Swal.fire(error.error,'Wrong Email or Password','error');
    },()=>{});
  }
}
