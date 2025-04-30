import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserLogin } from '../model/userLogin';
import { baseUrl } from '../constants/http-constants';


@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http:HttpClient) { }

  login(email : string, password : string) : any
  {
    let response = this.http.post<any>(`${baseUrl}/api/login`, {email,password});
    return response;
  }

  getToken() : void
  {
    sessionStorage.getItem("Token");
  }
}
