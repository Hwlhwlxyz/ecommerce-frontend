import { RegisterDialogComponent } from './../dialog/register-dialog/register-dialog.component';
import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { AccountService } from 'src/app/service/account.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private accountService: AccountService,
              public dialog: MatDialog,
              private router:Router) { }

  username: string;
  password: string;
  identity: string;

  
  ngOnInit() {
  }

  check(){
    let x = this.accountService.checkUserAndPassword(this.username, this.password);
    console.log(x)
  }

  login(){
    console.log(this.username, this.password, this.identity)
    if (this.identity==='salesperson'){
      this.accountService.salespersonlogin(this.username, this.password)
    }
    else{
     this.accountService.login(this.username, this.password, this.identity)
   }
  }

  openRegisterDialog(){
    const dialogRef = this.dialog.open(RegisterDialogComponent, {
      width: '300px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });



  }
}
