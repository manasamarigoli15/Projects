import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from '../constants/http-constants';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http:HttpClient) { }

  getUser() : Observable<any> {
    var response = this.http.get<any>(`${baseUrl}/api/profile`,
      {headers:{'Authorization':`Bearer ${sessionStorage.getItem('Token')}`}});
    return response;
  }
  
  updateProfile(user:any) : Observable<any> {
    var response = this.http.put<any>(`${baseUrl}/api/profile`,user,
    {headers:{'Authorization':`Bearer ${sessionStorage.getItem('Token')}`}});
    console.debug(response)
    return response;
  }
}
