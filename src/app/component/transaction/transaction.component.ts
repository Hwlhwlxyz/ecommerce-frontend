import { TransactionService } from 'src/app/service/transaction.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  constructor(public transactionService: TransactionService) { }
  transactionlist = []
  
  columnsToDisplay = ['tid',  'cid', 'pid','amount', 'sname', 'createdate'];
  dataSource = new MatTableDataSource < any > ();
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;


  columnHeaders_topcategories = ['kind', 'totalamount']
  categoriesamount = []
  categorytopamoint = 0




  columnHeaders_getSalesAndProfitOfProducts = ['pid', 'sales','profit']
  salesandprofitlist = []


  ngOnInit() {

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.transactionService.getAllTransaction().subscribe((response:[])=>{
      this.dataSource.data = response;
    })

    this.getTopCategories();
    this.getSalesAndProfit();
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

}
