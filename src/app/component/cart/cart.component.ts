import { TransactionService } from './../../service/transaction.service';
import { ProductService } from './../../service/product.service';
import { ProductComponent } from './../product/product.component';
import { Component, OnInit, ViewChild, Inject, Input } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  
})
export class CartComponent implements OnInit {

  constructor(public transactionService: TransactionService) { }
  columnsToDisplay = ['name', 'price',  'select_amount'];
  dataSource = new MatTableDataSource<any>();
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;


  
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dataSource.data = this.transactionService.getCart();

    console.log(this.transactionService.getCart())
    
  }


  
}
