import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SignUp } from '../models/sign-up';
import { Observable } from 'rxjs';
import { baseUserUrl } from '../constants/http-constants';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http:HttpClient) { }

  createUser(user:SignUp): Observable<SignUp>
  {
    let response = this.http.post<SignUp>(`${baseUserUrl}/api/signup`, user);
    return response;
  }
}
