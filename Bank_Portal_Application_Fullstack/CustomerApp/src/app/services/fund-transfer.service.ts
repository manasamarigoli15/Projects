import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from '../constants/http-constants';
import Transaction from '../models/transaction';

@Injectable({
  providedIn: 'root'
})
export class FundTransferService {

  constructor(private http:HttpClient) { }

  getTransaction() : Observable<any> {
    var response = this.http.get<any>(`${baseUrl}/api/transaction`,
      {headers:{'Authorization':`Bearer ${sessionStorage.getItem('Token')}`}});
    return response;
  }

  addTransaction(u:Transaction) : Observable<Transaction> {
    let response =  this.http.post<Transaction>(`${baseUrl}/api/transaction`,u,
    {headers:{'Authorization':`Bearer ${sessionStorage.getItem('Token')}`}});
    return response;
  }
}
