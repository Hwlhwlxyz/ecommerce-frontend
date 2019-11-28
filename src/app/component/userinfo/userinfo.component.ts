import { AccountService } from 'src/app/service/account.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit {

  constructor(public accountService: AccountService) { }

  userinfo = []
  identity = ''
  addressinfo = []
  homeinfo = []
  businessinfo = []


  
  ngOnInit() {
    this.accountService.getCustomer(this.accountService.getLocalCid()).subscribe(
      (response:[])=>{
        this.userinfo = response;
        console.log(this.userinfo)
      }
    )
    
    if (this.isCustomerHome()){
      this.accountService.getHomeinfo(this.accountService.getLocalCid()).subscribe(
        (response:[])=>{
          this.homeinfo = response;
          console.log(response)
        }
      )
    }
    if (this.isCustomerBusiness()){
      this.accountService.getBusinessinfo(this.accountService.getLocalCid()).subscribe(
        (response:[])=>{
          this.businessinfo = response;
          console.log(this.businessinfo)
        }
      )
    }

    this.accountService.getAddress(this.accountService.getLocalCid()).subscribe(
      (response:[])=>{
        this.addressinfo = response;
        console.log('addressinfo',this.addressinfo)
      }
      )
    
    
  }

  isCustomer(){
    return  this.accountService.isCustomerHome() || this.accountService.isCustomerBusiness();
  }

  isCustomerHome(){
    return this.accountService.isCustomerHome();
  }
  isCustomerBusiness(){
    return this.accountService.isCustomerBusiness();
  }

  isSalesperson(){
    return this.accountService.isSalesperson();
  }

  update_customeraccountinfo(){
    this.accountService.updateaccountinfo(this.userinfo).subscribe(response=>
      {
        console.log('info:',response)
      })
  }

  update_homeorbusinessinfo(){
    console.log(this.userinfo)
    if (this.isCustomerHome()){
      this.accountService.updateuserinfo(this.homeinfo).subscribe(response=>
        {
          console.log('info:',response)
        })
    }
    if(this.isCustomerBusiness()){
      this.accountService.updateuserinfo(this.businessinfo).subscribe(response=>{
        console.log('info:',response)
      })
    }
    
  }

  update_addressinfo(){
    console.log(this.addressinfo)
    this.accountService.updateaddressinfo(this.addressinfo).subscribe(response=>
      {
        console.log('info:',response)
      })
  }





}
