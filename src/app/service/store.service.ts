import { HttpClient } from '@angular/common/http';

import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private http: HttpClient) { }
  url = environment.apiBaseURL
  getStores(){
    return this.http.get(this.url+"/store")
  }
}
