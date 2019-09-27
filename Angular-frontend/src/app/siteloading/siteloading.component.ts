import { Component, OnInit } from '@angular/core';
import { ExcelService } from '../excel.service';
import { VILKerala } from '../assetmodel';
import { ApiService } from '../api.service';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-siteloading',
  templateUrl: './siteloading.component.html',
  styleUrls: ['./siteloading.component.css']
})
export class SiteloadingComponent implements OnInit {

  displayedColumns =['RFID','InfraID','InfraOwner','SiteName','Zone','District','Tenancy','FloorSpaceOFC','OfcFloorAreaID','OfcFloorAreaOD',
                    'BbuFLoorAreaID','BbuFLoorAreaOD','Ip55ODFloorArea','McuODFloorArea','TcuODFloorArea','TotalIDFLoorArea',
                    'TotalODFloorArea','RackSapce','UspaceCharge','Floor&RackSpaceCharge','LoadingCharges','ExpectedDCEM','BilledDCEM',
                    'DCEM difference','EBCost','DiseslCost','TotalEnergyCharges'
]

  VILKerala: any;
  searchKey: string; 

  constructor(private apiService:ApiService, private excelService:ExcelService) { }

  ngOnInit() {
    this.getDetails()
  }
  onSearchClear() {
    this.searchKey=""}
    public getDetails(){
      this.apiService.getDetails().subscribe(
        res => {
          this.VILKerala= new MatTableDataSource();
          this.VILKerala.data = res;
          console.log(this.VILKerala.data)
      })};

    applyFilter(filterValue: string){
      this.VILKerala.filter = filterValue.trim().toLocaleLowerCase()}

  exportAsXLSX():void {
    this.excelService.exportAsExcelFile(this.VILKerala.data,'VILKerala');    
  }}




