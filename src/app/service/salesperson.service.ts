import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SalespersonService {

  constructor(private http:HttpClient) { }

  url = environment.apiBaseURL;
  getAllSalespersons(){
    return this.http.get(this.url+"/allsalespersons")
  }

  getAllsalespersonInfo(sid){
    return this.http.get(this.url+"/salesperson/"+sid)
  }
}
