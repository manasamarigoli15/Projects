import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UserLogin } from '../model/userLogin';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})

export class UserloginComponent {
  ngOnInit(): void {
  }
  createUser(user:UserLogin){
    console.log(user)
  }

  constructor(private http:HttpClient, private authService:AuthService,private route: Router) {}

  email: string = "";
  password: string = "";

  onlogin() : void{
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
