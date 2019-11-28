import { Router } from '@angular/router';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { LocalStorageService, LocalStorage } from 'ngx-webstorage';
import { throwMatDialogContentAlreadyAttachedError, MatSnackBar } from '@angular/material';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(public localstorage:LocalStorageService,
    private http: HttpClient,
    private router:Router,
    private snackBar: MatSnackBar) { }

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
      return this.http.post(this.url+'/customer/home/login', loginData).subscribe(
        response=>{
        console.log('response=',response);
        this.localstorage.store('cid', response['cid']);
        this.localstorage.store('identity', identity); 
        if(response){
          this.router.navigateByUrl('product');
        }
        
      },
      err=>{
        console.log('error',err);
        let snackBarRef = this.snackBar.open(err['error']['error'], 'cancel');
      });
    }
    if (identity==='customer_business'){
      console.log(this.url+'/customer/business/login', loginData);
      return this.http.post(this.url+'/customer/business/login', loginData).subscribe(
        response=>{
        console.log('response',response);
        this.localstorage.store('cid', response['cid']);
        this.localstorage.store('identity', identity); 
        this.router.navigateByUrl('product');

      },
      err=>{
        console.log('error',err);
        let snackBarRef = this.snackBar.open(err['error']['error'], 'cancel');
      }
      );
    }
    
  }

  getLocalIdentity(){
    this.identity = this.localstorage.retrieve('identity');
    return this.identity;
  }
  getLocalCid(){
    return this.localstorage.retrieve('cid');

  }

  isCustomerHome(){
    return this.getLocalIdentity()==='customer_home';
  }
  isCustomerBusiness(){
    return this.getLocalIdentity()==='customer_business';
  }

  isSalesperson(){
    return this.getLocalIdentity()==='salesperson';
  }
  logout(){
    this.localstorage.clear('identity');
    this.localstorage.clear();
  }

  updateuserinfo(userinfo){

    if (this.isCustomerHome()){
      return this.http.post(this.url+'/customer/update/'+'home'+'/'+this.getLocalCid(),userinfo);
    }
    if(this.isCustomerBusiness()){
      return this.http.post(this.url+'/customer/update/'+'business'+'/'+this.getLocalCid(),userinfo);
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
      return this.http.post(this.url+'/salesperson/login', loginData).subscribe(
        response=> {
        console.log(response);
        this.localstorage.store('sid', response['sid']);
        this.localstorage.store('identity', 'salesperson'); 
        this.router.navigateByUrl('/salesperson/product')
      },
      err=>{
        console.log('error',err);
        let snackBarRef = this.snackBar.open(err['error']['error'], 'cancel');
      
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
