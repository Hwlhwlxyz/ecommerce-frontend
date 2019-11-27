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


  columnHeaders_regionsales=['rname', 'salesamount']
  columnHeaders_regionsales_name=['region name', 'sales amount']
  regionsales=[]
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getAllRegions();
    this.getRegionSales();
  }

  getAllRegions(){
    this.regionService.getRegions().subscribe((response:[])=>
    {
      this.dataSource.data=response
      console.log(response)
    });
  }



  getRegionSales(){
    this.regionService.getRegionSales().subscribe((response:[])=>
    {
      this.regionsales=response
      console.log(response)
    })
  }
}
