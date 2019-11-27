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

  
  ngOnInit() {

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.transactionService.getAllTransaction().subscribe((response:[])=>{
      this.dataSource.data = response;
    })

    
  }

  

}
