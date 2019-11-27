import { AddproductDialogComponent } from './../dialog/addproduct-dialog/addproduct-dialog.component';
import { ProductService } from './../../service/product.service';
import { TransactionService } from 'src/app/service/transaction.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-salesperson-product',
  templateUrl: './salesperson-product.component.html',
  styleUrls: ['./salesperson-product.component.css']
})
export class SalespersonProductComponent implements OnInit {


  constructor(public transactionService: TransactionService, 
    private productService: ProductService,
    public dialog: MatDialog) { }


  columnsToDisplay = ['name', 'kind','price', 'amount',  'edit_button'];
  dataSource = new MatTableDataSource < any > ();
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;



  kinds 
  selected_kind
  search_text

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getAll();
    this.getKinds();
  }



  select(){
    console.log(this.selected_kind)
  }

  search(){
    console.log(this.search_text)
  }


  getKinds(){
    this.productService.getKinds().subscribe(
      response => {
        this.kinds = response;
        console.log(response)
      },
      err => {
        console.log("kinds", err)
      }
    )
  }

  getByClassification(kind){
    this.productService.getProductsByClassification(kind).subscribe(
      (response:[] )=> {
        const productslist = response;
        this.dataSource = new MatTableDataSource<any>(productslist);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      err => {
        console.log("kinds", err)
      }
    )
  }

  getAll(){
    this.productService.getAllProducts().subscribe(
      (response:[] )=> {
        this.dataSource = new MatTableDataSource<any>(response);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      err => {
        console.log("kinds", err)
      }
    )
  }




  open_addproductdialog_edit(product){
    console.log(product)
    let dialogRef = this.dialog.open(AddproductDialogComponent, {
      data: { product: product , action: "Edit"},
    });
  }

  open_addproductdialog_add(){
    let dialogRef = this.dialog.open(AddproductDialogComponent, {
      data: { action: "Add"},
    });
  }
}
