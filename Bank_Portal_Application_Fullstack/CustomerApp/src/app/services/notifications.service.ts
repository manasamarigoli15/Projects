import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from '../constants/http-constants';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  constructor(private http:HttpClient) { }
  fetchNotifications() : Observable<any>{
    var response = this.http.get<any>(`${baseUrl}/api/feedback`,
      {headers:{'Authorization':`Bearer ${sessionStorage.getItem('Token')}`}});
    return response;
  }

  deleteNotification(id:number) : Observable<any> {
    var response = this.http.delete<any>(`${baseUrl}/api/feedback/${id}`,
    {headers:{'Authorization':`Bearer ${sessionStorage.getItem('Token')}`}});
    return response;
  }

  getUserStatus(regNo:any) : Observable<any> {
    var response = this.http.get<any>(`${baseUrl}/api/registrationStatus/${regNo}`);
    return response;
  }
}






