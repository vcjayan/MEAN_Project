import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { VILKerala } from '../assetmodel';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { ExcelService } from '../excel.service';
import * as moment from 'moment'

@Component({
  selector: 'app-sitelist1',
  
  templateUrl: './sitelist1.component.html',
  styleUrls: ['./sitelist1.component.css']
})

export class Sitelist1Component implements OnInit {  
  myDate = Date.now();
  timer;
  time = moment().format('DD MMMM YYYY, h:mm:ss a')
      
  displayedColumns =['RFID','InfraID','InfraOwner','SiteName','Zone','District','TowerType','TowerHeight','SiteType','OtherOPCOCount',
                    'BBULocation','BBUPosition','RRUCount2G','RRUCount3G4G','TDDRRUCount','MIMORRUCount','TotalRRUCount','AntennaCount2Port',
                    'AntennaCount4Port','AntennaCount6Port','AntennaCount8Port', 'AntennaCount10Port','MWMake','MWModel','MWLocation','MWPosition',
                    'MWCount','ILLDependnecy','AntennaCountPoint3','AntennaDirectionsPoint3','AntennaCountPoint6','AntennaDirectionsPoint6',
                    'AntennaCountPoint9','AntennaDirectionsPoint9','AntennaCount1Point2','AntennaDirections1Point2','AntennaCount1Point8',
                    'AntennaDirections1Point8','MUXMake','MUXModel','MUXLocation','MUXPosition','MUXCount','LastUpdate','Actions'];  
  
  VILKerala: any;
  searchKey: string; 

  constructor(private apiService:ApiService, private router:Router, private excelService:ExcelService) { }

    ngOnInit() {  
      this.timer = setInterval(() => {
        this.time = moment().format('DD MMMM YYYY, h:mm:ss a')
      }, 1000)    
    this.getDetails()}

    onSearchClear() {
    this.searchKey=""}
     
applyFilter(filterValue: string){
this.VILKerala.filter = filterValue.trim().toLocaleLowerCase()}
    
  public getDetails(){
    this.apiService.getDetails().subscribe(
      res => {
        this.VILKerala= new MatTableDataSource();
        this.VILKerala.data = res;
        console.log(this.VILKerala.data)
    })};

    editSite(id){
      this.router.navigate(['/edit', id])}

    deleteSite(id, site){
      if (confirm ('Are you sure to delete this data ?') == true){
  
      this.apiService.deleteSite(id, site).subscribe((response)=>{
        console.log(response);
        this.getDetails();
        alert ("Deleted successfully")})}}           
        
  exportAsXLSX():void {
    this.excelService.exportAsExcelFile(this.VILKerala.data,'VILKerala');
    
  }}
  export interface VILKerala {}