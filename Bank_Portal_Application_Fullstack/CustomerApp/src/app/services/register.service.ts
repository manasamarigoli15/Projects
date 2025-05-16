import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from '../constants/http-constants';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }

  register(user:any) : Observable<any>
  {
    var response = this.http.post<any>(`${baseUrl}/api/register`,user);
    return response;
  }

  getUser(email:any) : Observable<any> {
    var response = this.http.get<any>(`${baseUrl}/api/register/${email}`);
    return response;
  }
}
