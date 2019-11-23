import { Injectable } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { throwMatDialogContentAlreadyAttachedError } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(public localstorage:LocalStorageService) { }

  loginStatus: boolean;
  identity: string; // customer or salesperson

  checkUserAndPassword(username: string, password: string){
    return true;
  }

  register(username: string, password: string){
    //register
  }

  getUser(userid: number){
    //
    return {customerid:'1', income:'20', marriage_status:"marriage", gender:"gender", age:20};
  }

  login(username, password){

    this.localstorage.store("identity", this.identity);
  }

  getIdentity(){
    this.identity = this.localstorage.retrieve("identity");
    return this.identity;
  }

  isCustomer(){
    return true;
    //return this.getIdentity()==="customer";
  }
  isSalesperson(){
    return true;
    //return this.getIdentity()==="salesperson";
  }
  logout(){
    this.localstorage.clear("identity");
  }

  updateinfo(userinfo){
    
  }
  
}
