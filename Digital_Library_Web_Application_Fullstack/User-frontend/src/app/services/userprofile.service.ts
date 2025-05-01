import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUserUrl } from '../constants/http-constants';
import { UserProfile } from '../models/userprofile';

@Injectable({
  providedIn: 'root'
})
export class UserprofileService {

  constructor(private http:HttpClient) { }

  getUser() : Observable<any>
  {
    let response = this.http.get<any>(`${baseUserUrl}/api/profile`, 
    {headers:{'Authorization':`Bearer ${sessionStorage.getItem('Token')}`}}
    );
    return response;
  }

  updateUser(user:UserProfile) : Observable<any>
  {
    var response = this.http.put<any>(`${baseUserUrl}/api/profile`,user,
      {headers:{'Authorization':`Bearer ${sessionStorage.getItem('Token')}`}});
    return response;
  }
}
