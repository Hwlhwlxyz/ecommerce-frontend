import { SalespersonService } from './../../service/salesperson.service';
import { TransactionService } from './../../service/transaction.service';
import { ProductService } from './../../service/product.service';
import { ProductComponent } from './../product/product.component';
import { Component, OnInit, ViewChild, Inject, Input } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatSnackBar } from '@angular/material';
import { stringify } from 'querystring';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  
})
export class CartComponent implements OnInit {

  constructor(public transactionService: TransactionService,
    private salesperson: SalespersonService,
    private _snackBar: MatSnackBar
    ) { }
  columnsToDisplay = ['name', 'price',  'select_amount'];
  dataSource = new MatTableDataSource<any>();
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  selectedSalespersonId
  salespersons = []
  
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dataSource.data = this.transactionService.getCart();
    this.getAllSalespersons();
    console.log(this.transactionService.getCart())
    
  }

  transactionlist_submit(){
    this.transactionService.submitTransactions(this.selectedSalespersonId).subscribe(
      response=>{
      console.log(response)
      this.clearCart();
      this._snackBar.open("success","close",{duration: 1000,});
    },
    err=>{
      console.log(err)
      alert((err['error']['error'] +", product id: "+ err['error']['pid']))
      this.clearCart();
    })
  }

  clearCart(){
    this.transactionService.clearCart();
    console.log("cleared cart",this.transactionService.getCart())
    this.dataSource.data = this.transactionService.getCart();
  }

  getAllSalespersons(){
    this.salesperson.getAllSalespersons().subscribe(
      (response:[])=>{
        this.salespersons = response;
        console.log(this.salespersons)
      }
    )
  }

  emptyornosalesperson(){
    if (!this.selectedSalespersonId || this.transactionService.getCart().length<=0){
      return true;
    }
    else{
      return false;
    }
  }


  
}
