import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { VILKerala } from '../assetmodel';
import { ApiService } from '../api.service';
import { Injectable } from '@angular/core';
import { HttpEvent, HttpRequest, HttpHandler,HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { ErrorHandler } from '@angular/core';
import * as moment from 'moment'
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';




@Component({
  selector: 'app-sitecreate',
  templateUrl: './sitecreate.component.html',
  styleUrls: ['./sitecreate.component.css']
})
export class SitecreateComponent implements OnInit {
  lists:any=''
  datas:any=''
  items:any='';
  timer;
  time = moment().format('DD MMMM YYYY, h:mm:ss a')

  Zones : {}
  Districts : {}
  TotalRRUCount: Number

   
  

  constructor(private apiService:ApiService) { }

  ngOnInit() {
    this.apiService.getZone().subscribe(
      data => this.Zones = data
    )
    this.timer = setInterval(() => {
      this.time = moment().format('DD MMMM YYYY, h:mm:ss a')
    }, 1000)   
  }

  onSubmit(form:NgForm) {

    const site: VILKerala={

      RFID:form.value.RFID,
      InfraID:form.value.InfraID,
      InfraOwner:form.value.InfraOwner,
      SiteName:form.value.SiteName,
      Zone:form.value.Zone,
      District:form.value.District,
      TowerType:form.value.TowerType,
      TowerHeight:form.value.TowerHeight,
      SiteType:form.value.SiteType,
      OtherOPCOCount:form.value.OtherOPCOCount,
      BBULocation:form.value.BBULocation,
      BBUPosition:form.value.BBUPosition,
      RRUCount2G:form.value.RRUCount2G,
      RRUCount3G4G:form.value.RRUCount3G4G,
      TDDRRUCount:form.value.TDDRRUCount,
      MIMORRUCount:form.value.MIMORRUCount,
      TotalRRUCount:form.value.RRUCount2G+form.value.RRUCount3G4G+form.value.TDDRRUCount+form.value.MIMORRUCount,
      AntennaCount2Port:form.value.AntennaCount2Port,
      AntennaCount4Port:form.value.AntennaCount4Port,
      AntennaCount6Port:form.value.AntennaCount6Port,
      AntennaCount8Port:form.value.AntennaCount8Port,
      AntennaCount10Port:form.value.AntennaCount10Port,
      MWMake:form.value.MWMake,
      MWModel:form.value.MWModel,
      MWLocation:form.value.MWLocation,
      MWPosition:form.value.MWPosition,
      MWCount:form.value.MWCount,
      ILLDependnecy:form.value.ILLDependnecy,
      AntennaCountPoint3:form.value.AntennaCountPoint3,
      AntennaDirectionsPoint3:form.value.AntennaDirectionsPoint3,
      AntennaCountPoint6:form.value.AntennaCountPoint6,
      AntennaDirectionsPoint6: form.value.AntennaDirectionsPoint6,
      AntennaCountPoint9:form.value.AntennaCountPoint9,
      AntennaDirectionsPoint9:form.value.AntennaDirectionsPoint9,
      AntennaCount1Point2:form.value.AntennaCount1Point2,
      AntennaDirections1Point2:form.value.AntennaDirections1Point2,
      AntennaCount1Point8:form.value.AntennaCount1Point8,
      AntennaDirections1Point8:form.value.AntennaDirections1Point8,
      MUXMake:form.value.MUXMake,
      MUXModel:form.value.MUXModel,
      MUXLocation:form.value.MUXLocation,
      MUXPosition:form.value.MUXPosition,
      MUXCount:form.value.MUXCount,
      LastUpdate:moment().format('MM-DD-YY,h.mm a')
    }

    this.apiService.sendSite(site).subscribe((response)=>{
      console.log(response);
        
      
      
      alert('Successfully created')
      form.reset()
    });

    console.log(JSON.stringify(site));

  }
    
  changes(t){
    switch(t.value){
      case '' : 
      this.datas=[''];
      break;
      case 'Calicut' : 
      this.datas=['','Kazargod','Kannur','Wayanad','Calicut'];
      break;
      case 'Malappuram' : 
      this.datas=['','Malappuram'];
      break;
      case 'Thrissur' : 
      this.datas=['','Thrissur','Palakkad'];
      break;
      case 'Ernakulam' : 
      this.datas=['','Ernakulam','Alappuzha','Kottayam','Idukki'];
      break;
      case 'Trivandrum' : 
      this.datas=['','Pathanamthitta','Kollam','Trivandrum'];
      break;
      }}
  change(t){
    switch(t.value){
      case '' : 
      this.items=[''];
      case 'NEC' : 
      this.items=['','iPaso 200','iPaso 400','iPaso 1000','VR4'];
      break;
      case 'Huawei' : 
      this.items=['','RTN 1.0','RTN 2.0'];
      break;
  }}
  change1(t){
    switch(t.value){
      case '' : 
      this.lists=[''];
      case 'NA' : 
      this.lists=['NA'];
      case 'Huawei' : 
      this.lists=['','Optix 3500','Optix 7500'];
      break;
      case 'Fibcom' : 
      this.lists=['','Fib 1','Fib 2'];
      break;
      case 'Thejas' : 
      this.lists=['','Thej 1.0','Thej 1.2'];
      break;
      }
  
  }

}
