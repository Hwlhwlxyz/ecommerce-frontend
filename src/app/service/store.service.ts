import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor() { }

  getStores(){
    return [{sid:1, address:"address1", smanager:"m", snum:1, region:"region"}];
  }
}
