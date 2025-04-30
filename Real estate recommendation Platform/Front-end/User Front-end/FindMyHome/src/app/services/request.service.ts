import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from '../constants/http-constants';
import Requests from '../model/request';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http:HttpClient) { }

  sendrequest(res:Requests):Observable<Request[]>
  {
    let response =  this.http.post<Request[]>(`${baseUrl}/api/userrequest`,res,
    {headers:{'Authorization':`Bearer ${sessionStorage.getItem('Token')}`}});
    return response;
  }
}
