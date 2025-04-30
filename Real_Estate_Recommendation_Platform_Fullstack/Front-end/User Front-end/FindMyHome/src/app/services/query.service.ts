import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { admin, baseUrl } from '../constants/http-constants';
import { Query } from '../model/query';

@Injectable({
  providedIn: 'root'
})
export class QueryService {

  constructor(private http:HttpClient) { }

  addQuery(q:Query):Observable<Query>
  {
    let response=this.http.post<Query>(`${baseUrl}/api/userquery`,q);
    return response;
  }

  getQuery():Observable<Array<Query>>
  {
    let response = this.http.get<Array<Query>>(`${baseUrl}/api/userquery`)
    return response;
  }
}
