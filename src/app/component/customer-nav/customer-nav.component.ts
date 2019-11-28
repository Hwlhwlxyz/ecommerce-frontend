import { AccountService } from './../../service/account.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-nav',
  templateUrl: './customer-nav.component.html',
  styleUrls: ['./customer-nav.component.css']
})
export class CustomerNavComponent implements OnInit {

  constructor(private accountService: AccountService,
    private router:Router) { }

  ngOnInit() {
  }

  logout(){
    console.log("logout")
    this.accountService.logout();
    this.router.navigateByUrl('/login');
  }
}
