import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from '../constants/http-constants';
import Shortlists from '../model/shortlist';

@Injectable({
  providedIn: 'root'
})
export class ShortlistService {

  constructor(private http:HttpClient) { }

  sendshortlist(res:Shortlists):Observable<Shortlists[]>
  {
    let response =  this.http.post<Shortlists[]>(`${baseUrl}/api/usershortlist`,res,
    {headers:{'Authorization':`Bearer ${sessionStorage.getItem('Token')}`}});
    return response;
  }

  getshortlist():Observable<Array<Shortlists>>
  {
    let response = this.http.get<Array<Shortlists>>(`${baseUrl}/api/usershortlist`)
    return response;
  }

  deleteshortlist(id:number|undefined):Observable<Shortlists>
  {
    let response = this.http.delete<Shortlists>(`${baseUrl}/api/usershortlist/${id}`);
   

    return response;
  }
}
