import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-salesperson-nav',
  templateUrl: './salesperson-nav.component.html',
  styleUrls: ['./salesperson-nav.component.css']
})
export class SalespersonNavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  logout(){
    console.log("logout")
  }
}
