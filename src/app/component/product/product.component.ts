import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { TransactionService } from 'src/app/service/transaction.service';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],

})
export class ProductComponent implements OnInit {

  constructor(private productService: ProductService,
    public transactionService: TransactionService) {}


  columnsToDisplay = ['name', 'kind','price', 'amount', 'select_amount', 'add_button'];
  dataSource = new MatTableDataSource < any > ();
  @ViewChild(MatPaginator, {
    static: true
  }) paginator: MatPaginator;
  @ViewChild(MatSort, {
    static: true
  }) sort: MatSort;


  tempcart = [];
  kinds = [];
  selected_kind
  search_text

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dataSource.data = this.productService.getAllProducts();
    this.kinds = this.productService.getKinds();
  }

  addToCart(product) {
    this.transactionService.addToCart(product)
    console.log(this.transactionService.getCart())
  }

  select(){
    console.log(this.selected_kind)
  }

  search(){
    console.log(this.search_text)
  }

}
