import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-register-dialog',
  templateUrl: './register-dialog.component.html',
  styleUrls: ['./register-dialog.component.css']
})
export class RegisterDialogComponent implements OnInit {
  username: string;
  password: string;
  constructor(public dialogRef: MatDialogRef<RegisterDialogComponent>) { }

  ngOnInit() {
  }

  register(){
    console.log(this.username, this.password);
    this.dialogRef.close("submit")
  }

  onNoClick(): void {
    this.dialogRef.close("cancel");
  }


}
