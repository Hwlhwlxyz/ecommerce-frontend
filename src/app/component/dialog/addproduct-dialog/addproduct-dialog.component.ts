import { ProductService } from './../../../service/product.service';
import { Component, OnInit, Inject } from '@angular/core';
import { RegisterDialogComponent } from '../register-dialog/register-dialog.component';
import { MatDialogRef, MAT_DIALOG_DATA, MatChipInputEvent } from '@angular/material';
import {COMMA, ENTER} from '@angular/cdk/keycodes';


@Component({
  selector: 'app-addproduct-dialog',
  templateUrl: './addproduct-dialog.component.html',
  styleUrls: ['./addproduct-dialog.component.css']
})
export class AddproductDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<RegisterDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private productService: ProductService
    ) { }

  productinfo = {}
  kinds = []
  action = ""

  //chip
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];


  ngOnInit() {
    console.log(this.data.action)
    this.action = this.data.action;
    if ( this.data.product){
      this.productinfo = this.data.product;
      this.kinds = this.productinfo['kind']
    }
    
  }

  submit(){
    console.log(this.productinfo)
    console.log(this.kinds)
    console.log(this.action)
    if (this.action==='Add'){
      this.productService.addNweProduct(this.productinfo, this.kinds).subscribe(response=>{
        console.log(response);
      })
    }
    if (this.action==='Edit'){
      this.productService.updateProductInfo(this.productinfo, this.kinds).subscribe(response=>{
        console.log(response);
      })
    }
    
  }

  onNoClick(): void {
    this.dialogRef.close();
  }


  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
    if ((value || '').trim()) {
      this.kinds.push(value.trim());
    }
    // Reset the input value
    if (input) {
      input.value = '';
    }
  }
  remove(kind): void {
    const index = this.kinds.indexOf(kind);
    if (index >= 0) {
      this.kinds.splice(index, 1);
    }
  }
  

}
