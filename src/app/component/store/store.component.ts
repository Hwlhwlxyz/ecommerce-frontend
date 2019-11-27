import { StoreService } from './../../service/store.service';
import { RegionService } from './../../service/region.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  constructor(private regionService: RegionService,
    private storeService: StoreService) { }
  columnsToDisplay = ['address', 'smanager', 'snum', 'region'];
  dataSource = new MatTableDataSource < any > ();
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;


  
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getStores();
  }

  getStores(){
    this.storeService.getStores().subscribe((response:[])=>{
      this.dataSource.data = response;
      console.log(response)
    })
  }

}
