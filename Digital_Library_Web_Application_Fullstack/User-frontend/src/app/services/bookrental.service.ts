import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUserUrl } from '../constants/http-constants';
import { RentRequest } from '../models/rentrequest';
import { BookRental } from '../models/bookrental';
import { ReturnRequest } from '../models/returnrequest';

@Injectable({
  providedIn: 'root'
})
export class BookrentalService {

  constructor(private http:HttpClient) { }

  sendRentRequest(req:RentRequest) : Observable<RentRequest[]>
  {
    let response =  this.http.post<RentRequest[]>(`${baseUserUrl}/api/bookrental`,req,
    {headers:{'Authorization':`Bearer ${sessionStorage.getItem('Token')}`}});
    return response;
  }

  getRentedBooks():Observable<Array<BookRental>>
  {
    let response = this.http.get<Array<BookRental>>(`${baseUserUrl}/api/bookrental`,
    {headers:{'Authorization':`Bearer ${sessionStorage.getItem('Token')}`}}
    );
    return response;
  }

  sendReturnRequest(req:ReturnRequest) : Observable<ReturnRequest[]>
  {
    let response =  this.http.post<ReturnRequest[]>(`${baseUserUrl}/api/bookrental/returnbook/{returnBook}`,req,
    {headers:{'Authorization':`Bearer ${sessionStorage.getItem('Token')}`}});
    return response;
  }
}
