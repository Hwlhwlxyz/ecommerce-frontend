
import { Injectable } from '@angular/core';
import {SessionStorageService, LocalStorageService} from 'ngx-webstorage';


@Injectable({
  providedIn: 'root'
})
export class TransactionService {


  
  cart=[];
  constructor(public session:SessionStorageService, public localstorage:LocalStorageService) { 
    
  }

  addToCart(product){
    this.cart.push(product)
    //this.session.store("cart", this.cart)
    this.localstorage.store('cart', this.cart);
  }

  getCart(){
    //this.cart = this.session.retrieve("cart")
    this.cart = this.localstorage.retrieve('cart')
    console.log(this.cart)
    return this.cart;
  }

  submitTransaction(){
    this.cart
    this.localstorage.clear('cart')
  }


  getAllTransaction(){
    return [{onum:1, amount:1, cid:1, pid:1, sname:'name', createDate:''}];
  }


  getTransactionByCustomerid(){

  }
 
}
