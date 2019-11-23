import { AccountService } from 'src/app/service/account.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit {

  constructor(public accountService: AccountService) { }

  userinfo
  identity = ''

  
  ngOnInit() {
    this.userinfo = this.accountService.getUser(1);
    this.identity = this.accountService.getIdentity();
  }

  isCustomer(){
    return this.accountService.isCustomer();
  }

  isSalesperson(){
    return this.accountService.isSalesperson();
  }

  update(){
    console.log(this.userinfo)
  }

}
