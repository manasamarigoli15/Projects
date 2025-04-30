import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {  admin, baseUrl } from '../constants/http-constants';
import propertyInfo from '../model/propertyInfo';
import { searchFilter } from '../model/searchFilter';

@Injectable({
  providedIn: 'root'
})
export class PropertydisplayService {

  constructor(private http:HttpClient) { }
  getCategoryType(categoryType:string):Observable<Array<propertyInfo>>
  {
    let response=this.http.get<Array<propertyInfo>>(`${baseUrl}/api/userproperty/getByCategory/${categoryType}`);
    return response;
  }

  getProperty():Observable<Array<propertyInfo>>
  {
    let response = this.http.get<Array<propertyInfo>>(`${admin}/api/property`)
    return response;
  }

  getLocation(location:string):Observable<Array<propertyInfo>>
  {
    let response = this.http.get<Array<propertyInfo>>(`${baseUrl}/api/userproperty/getByLocation/${location}`)
    return response;
  }
  getCity(city:string):Observable<Array<propertyInfo>>
  {
    let response = this.http.get<Array<propertyInfo>>(`${baseUrl}/api/userproperty/getByCity/${city}`)
    return response;
  }
  getPropertyType(propertType:string):Observable<Array<propertyInfo>>
  {
    let response = this.http.get<Array<propertyInfo>>(`${baseUrl}/api/userproperty/getByPropertyType/${propertType}`)
    return response;
  }
  getFurnishedStatus(furnishedStatus:string):Observable<Array<propertyInfo>>
  {
    let response = this.http.get<Array<propertyInfo>>(`${baseUrl}/api/userproperty/getByFurnishedStatus/${furnishedStatus}`)
    return response;
  }
  getPropertyById(id:number):Observable<propertyInfo>
  {
    let response = this.http.get<propertyInfo>(`${baseUrl}/api/userproperty/${id}`)
    return response;
  }

  // getAgencyById(Agencyid:number):Observable<propertyInfo>
  // {
  //   let response = this.http.get<propertyInfo>(``)
  // }

  getsearchfilter(sf:searchFilter) : Observable<Array<propertyInfo>>
  {
      let response = this.http.post<Array<propertyInfo>>(`${baseUrl}/api/userproperty`,sf);
      return response;
  }
}
