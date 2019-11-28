import { AccountService } from './../../service/account.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-salesperson-nav',
  templateUrl: './salesperson-nav.component.html',
  styleUrls: ['./salesperson-nav.component.css']
})
export class SalespersonNavComponent implements OnInit {

  constructor(private accountService:AccountService,
    private router:Router) { }

  ngOnInit() {
  }

  logout(){
    console.log("logout")
    this.accountService.logout();
    this.router.navigateByUrl('/login');
  }
}
