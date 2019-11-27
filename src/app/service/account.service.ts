import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { LocalStorageService, LocalStorage } from 'ngx-webstorage';
import { throwMatDialogContentAlreadyAttachedError } from '@angular/material';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(public localstorage:LocalStorageService,
    private http: HttpClient) { }

  @LocalStorage('loginStatus')
  loginStatus: boolean;

  @LocalStorage('identity')
  identity: string; // customer or salesperson

  url = environment.apiBaseURL;

  checkUserAndPassword(username: string, password: string){
    return true;
  }

  register(username: string, password: string){
    //register
    
  }



  getCustomer(cid){
    return this.http.get(this.url+'/customer/getbyid/'+cid);
  }

  getCustomerWithAddress(cid){
    return this.http.get(this.url+'/customer/getwithaddress/'+cid);
  }

  getAddress(cid){
    return this.http.get(this.url+'/address/getbycid/'+cid);
  }

  getHomeinfo(cid){
    return this.http.get(this.url+'/customer/home/'+cid);
  }

  getBusinessinfo(cid){
    return this.http.get(this.url+'/customer/business/'+cid);
  }

  login(username, password, identity){

    
    
    let loginData =  {username: username, password: password, ckind:identity};

    if (identity==='customer_home'){
      console.log(this.url+'/customer/home/login', loginData);
      return this.http.post(this.url+'/customer/home/login', loginData).subscribe(response=>{
        console.log(response);
        this.localstorage.store('cid', response['cid']);
        this.localstorage.store('identity', identity); 
      });
    }
    if (identity==='customer_business'){
      console.log(this.url+'/customer/business/login', loginData);
      return this.http.post(this.url+'/customer/home/login', loginData).subscribe(
        response=>{
        console.log('response',response);
        this.localstorage.store('cid', response['cid']);
        this.localstorage.store('identity', identity); 
      },
      err=>{
        console.log('error',err);
      }
      );
    }
    
  }

  getLocalIdentity(){
    return 'home';
    this.identity = this.localstorage.retrieve('identity');
    return this.identity;
  }
  getLocalCid(){
    //return this.localstorage.retrieve('cid');
    return 1;
  }

  isCustomerHome(){
    return true;
    return this.getLocalIdentity()==='customer_home';
  }
  isCustomerBusiness(){
    return true;
    return this.getLocalIdentity()==='customer_business';
  }

  isSalesperson(){
    return this.getLocalIdentity()==='salesperson';
  }
  logout(){
    this.localstorage.clear('identity');
  }

  updateuserinfo(userinfo){
    if (this.isCustomerHome()){
      return this.http.post(this.url+'/customer/update/'+this.getLocalIdentity()+'/'+this.getLocalCid(),userinfo);
    }
    if(this.isCustomerBusiness()){
      return this.http.post(this.url+'/customer/update/'+this.getLocalIdentity()+'/'+this.getLocalCid(),userinfo);
    }
  }

  updateaddressinfo(addressinfo){
    return this.http.post(this.url+'/address/update/'+this.getLocalCid(), addressinfo);
  }

  updateaccountinfo(accountinfo){
    return this.http.post(this.url+'/customer/update/'+this.getLocalCid(), accountinfo);
  }






  //salesperson
  salespersonlogin(username, password){
    let loginData =  {username: username, password: password};
      console.log(this.url +'/salesperson/login', loginData);
      return this.http.post(this.url+'/salesperson/login', loginData).subscribe(response=> {
        console.log(response);
        this.localstorage.store('sid', response['sid']);
        this.localstorage.store('identity', 'salesperson'); 
      });
  }

  getLocalSid(){
    //return this.localstorage.retrieve('sid');
    return 1;
  }

  salespersoninfo(sid){
    return this.http.get(this.url+"/salesperson/"+sid)
  }
}
