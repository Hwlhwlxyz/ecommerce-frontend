import { Component, OnInit, Inject } from '@angular/core';
import { RegisterDialogComponent } from '../register-dialog/register-dialog.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-addproduct-dialog',
  templateUrl: './addproduct-dialog.component.html',
  styleUrls: ['./addproduct-dialog.component.css']
})
export class AddproductDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<RegisterDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) { }

  productinfo = {pname:"", price:'', inventory_amount:''}
  action = ""
  ngOnInit() {
    console.log(this.data.product)
    if ( this.data.product){
      this.productinfo = this.data.product;
    }
    
    this.action = this.data.action;
  }

  submit(){
    console.log(this.productinfo)
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  

}
