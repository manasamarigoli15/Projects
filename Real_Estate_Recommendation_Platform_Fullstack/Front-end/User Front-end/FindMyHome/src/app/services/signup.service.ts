import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from '../constants/http-constants';
import { userSignUp } from '../model/userSignUp';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http:HttpClient) { }

  createUser(u:userSignUp) : Observable<userSignUp>
  {
        let response =  this.http.post<userSignUp>(`${baseUrl}/api/signup`,u);
        return response;
  }
}
