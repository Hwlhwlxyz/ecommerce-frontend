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
  dataSource = new MatTableDataSource<any>();
  @ViewChild(MatPaginator, {
    static: true
  }) paginator: MatPaginator;
  @ViewChild(MatSort, {
    static: true
  }) sort: MatSort;



  kinds;
  selected_kind
  search_text

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getKinds();
    this.getAll();
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

  addToCart(product) {
    this.transactionService.addToCart(product)
    console.log(this.transactionService.getCart())
  }

  select(){
    this.getByClassification(this.selected_kind)
  }

  search(){
    console.log(this.search_text)
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

}
