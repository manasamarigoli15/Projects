import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from '../constants/http-constants';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  login(user:any) : Observable<any>
  {
    var response = this.http.post<any>(`${baseUrl}/api/login`,user);
    return response;
  }
}
