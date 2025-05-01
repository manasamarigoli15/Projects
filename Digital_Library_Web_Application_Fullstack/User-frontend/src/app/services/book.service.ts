import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../models/book';
import { HttpClient } from '@angular/common/http';
import { baseBookUrl } from '../constants/http-constants';
import { SearchFilter } from '../models/searchfilter';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }
  
  getBooks():Observable<Array<Book>>
  {
    let response = this.http.get<Array<Book>>(`${baseBookUrl}/api/book`);
    return response;
  }
 
  getBookById(id:number):Observable<Book>
  {
    let response = this.http.get<Book>(`${baseBookUrl}/api/book/${id}`);
    return response;
  }
 
  getSearchFilter(sf:SearchFilter): Observable<Array<Book>>
  {
    let response = this.http.post<Array<Book>>(`${baseBookUrl}/api/book`, sf);
    return response;
  }
}
