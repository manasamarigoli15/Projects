import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from '../constants/http-constants';
import Loan from '../models/loan';

@Injectable({
  providedIn: 'root'
})
export class LoanService {
  constructor(private http:HttpClient) { }
  addLoan(u:Loan) : Observable<Loan>
   {
     let response =  this
                        .http
                        .post<Loan>
                        (`${baseUrl}/api/loan`,u,{headers:{'Authorization':`Bearer ${sessionStorage.getItem('Token')}`}});
     return response;
   }
  }