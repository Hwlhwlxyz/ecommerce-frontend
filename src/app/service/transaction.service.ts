import { AccountService } from './account.service';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import {SessionStorageService, LocalStorageService, LocalStorage} from 'ngx-webstorage';
import { temporaryAllocator } from '@angular/compiler/src/render3/view/util';
import { temporaryDeclaration } from '@angular/compiler/src/compiler_util/expression_converter';


@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  url = environment.apiBaseURL
  
  @LocalStorage('cart')
  cart=[];


  constructor(public session:SessionStorageService,
     public localstorage:LocalStorageService,
     private http:HttpClient,
     public accountService: AccountService) { 
    
  }

  addToCart(product){
    this.getCart()
    this.cart.push(product)
    //this.session.store("cart", this.cart)
    this.localstorage.store('cart', this.cart);
  }

  getCart(){
    //this.cart = this.session.retrieve("cart")
    let tempcart = this.localstorage.retrieve('cart')
    if(tempcart){
      this.cart = tempcart;
    }
    else{
      this.cart = [];
    }
    //console.log(this.cart)
    return this.cart;
  }

  submitTransactions(selectedSalespersonId){
    this.getCart()
    return this.http.post(this.url+"/transactionlist/"+this.accountService.getLocalCid()+"/"+selectedSalespersonId+"/submit",this.cart)
  }

  clearCart(){
    this.localstorage.clear('cart');
  }

  getAllTransaction(){

    return this.http.get(this.url+'/transaction');
  }


  getTransactionByCustomerid(){

  }
 
}
