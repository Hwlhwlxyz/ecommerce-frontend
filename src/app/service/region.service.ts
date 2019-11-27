import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegionService {

  constructor(private http:HttpClient) { }
  url = environment.apiBaseURL
  getRegions(){
    return this.http.get(this.url+"/region")
  }
}
