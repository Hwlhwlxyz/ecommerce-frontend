import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegionService {

  constructor() { }

  getRegions(){
    return [{rid:1, rname:"regionname", rmanager:"manager"}];
  }
}
