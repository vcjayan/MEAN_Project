import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { VILKerala } from '../assetmodel';
import { ApiService } from '../api.service'
import { Router } from '@angular/router'
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment'

@Component({
  selector: 'app-siteedit',
  templateUrl: './siteedit.component.html',
  styleUrls: ['./siteedit.component.css']
})
export class SiteeditComponent implements OnInit {
  timer;
  time = moment().format('DD MMMM YYYY, h:mm:ss a')
  id:number;
  private sub: any;
  private details: Array<object>=[]  

  constructor(private apiService:ApiService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit() {
    
    this.sub = this.route.params.subscribe(params=>{
      this.id = params['id'];      
      this.getSitebyId(this.id);
      console.log('this.id');

      this.timer = setInterval(() => {
        this.time = moment().format('DD MMMM YYYY, h:mm:ss a')
      }, 1000) 
      })   
       
  }
  public getSitebyId(id){
    this.apiService.getSitebyId(id).subscribe((data: Array<object> = [])=>{
      this.details = data;
            console.log(data);
    })
  }

onUpdate(form:NgForm) {

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
    TotalRRUCount:form.value.TotalRRUCount,
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
    
    this.apiService.updateSite(this.id, site).subscribe((response)=>{
      console.log(response);
      
      alert('Successfully Updated')
      form.reset()
      this.router.navigate(['/main/view1'])

    });
    
    console.log(JSON.stringify(site));
    

}

}
