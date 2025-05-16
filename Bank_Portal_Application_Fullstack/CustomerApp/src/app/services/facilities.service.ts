import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from '../constants/http-constants';

@Injectable({
  providedIn: 'root'
})
export class FacilitiesService {

  constructor(private http:HttpClient) { }

  apply(facilities:any) : Observable<any> {
    var response = this.http.post<any>(`${baseUrl}/api/facility`,facilities,
    {headers:{'Authorization':`Bearer ${sessionStorage.getItem('Token')}`}});
    return response;
  }
}
