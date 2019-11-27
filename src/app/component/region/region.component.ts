import { Component, OnInit, ViewChild } from '@angular/core';
import { RegionService } from 'src/app/service/region.service';
import { StoreService } from 'src/app/service/store.service';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit {

  constructor(private regionService: RegionService,
    private storeService: StoreService) { }
  columnsToDisplay = ['rname', 'rmanager'];
  dataSource = new MatTableDataSource < any > ();
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;


  
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getAllRegions()
  }

  getAllRegions(){
    this.regionService.getRegions().subscribe((response:[])=>
    {
      this.dataSource.data=response
      console.log(response)
    });
  }
}
