import { ProductService } from 'src/app/service/product.service';
import { TransactionService } from 'src/app/service/transaction.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  constructor(public transactionService: TransactionService,
    private prodcutService: ProductService) { }
  transactionlist = []
  
  columnsToDisplay = ['tid',  'cid', 'pid','amount', 'sname', 'createdate'];
  dataSource = new MatTableDataSource < any > ();
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;


  columnHeaders_topcategories = ['kind', 'totalamount']
  categoriesamount = []
  categorytopamoint = 0

    products=[]

    selectedProductId

  columnHeaders_getSalesAndProfitOfProducts = ['pid', 'sales','profit']
  salesandprofitlist = []

  columnHeaders_mostgivenproducts = ['pid', 'cname', 'producttotalamount']
  mostgivenproducts = []
  ngOnInit() {

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.transactionService.getAllTransaction().subscribe((response:[])=>{
      this.dataSource.data = response;
    })

    this.getTopCategories();
    this.getSalesAndProfit();
    this.getAllProducts();
    console.log(this.products)
  }

  getTopCategories(){
    this.transactionService.getTopCategories().subscribe((response:[])=>{
      this.categoriesamount = response;
      console.log(this.categoriesamount)
      for(let i;i<this.categoriesamount.length;i++){
        if(this.categorytopamoint<this.categoriesamount[i]['totaltotalamountamount']){
          this.categorytopamoint = this.categoriesamount[i]['totalamount'];
          console.log(this.categorytopamoint , this.categoriesamount[i]['totalamount'])
        }
      }
      console.log("top", this.categorytopamoint)
    })
  }

  getAllProducts(){
   this.prodcutService.getAllProducts().subscribe((response:[])=>{
     this.products = response
   })
  }

  isTopCategory(row){
    console.log(row)
    console.log(row['totalamount'], this.categorytopamoint)
    return row['totalamount'] ===  this.categorytopamoint
  }

  getSalesAndProfit(){
    this.transactionService.getSalesAndProfitOfProducts().subscribe((response:[])=>
    {
      this.salesandprofitlist = response;
      console.log(this.salesandprofitlist)
    })
  }

  getmostgivenproducts(){
    this.transactionService.getBusinessBuyingMostProducts(this.selectedProductId).subscribe((response:[])=>{
      this.mostgivenproducts = response
    },
    err=>{
      console.log(err);
      this.mostgivenproducts = [{"pid": 'null', "cname": "null", "producttotalamount": 'no product or no transaction'}]
    })
  }

  select(){
    this.getmostgivenproducts();
  }

}
