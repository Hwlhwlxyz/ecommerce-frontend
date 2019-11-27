import { AccountService } from 'src/app/service/account.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-salesperson-userinfo',
  templateUrl: './salesperson-userinfo.component.html',
  styleUrls: ['./salesperson-userinfo.component.css']
})
export class SalespersonUserinfoComponent implements OnInit {

  constructor(private accountService: AccountService) { }
  userinfo = []
  identity = ''
  addressinfo = []
  homeinfo = []
  businessinfo = []


  ngOnInit() {
    this.accountService.getAddress(this.accountService.getLocalSid()).subscribe(
      (response:[])=>{
        this.addressinfo = response;
        console.log('addressinfo',this.addressinfo)
      }
      )

      this.accountService.salespersoninfo(this.accountService.getLocalSid()).subscribe(
        (response:[])=>{
          this.userinfo=response;
          console.log(this.userinfo)
        }
      )

  }





}
