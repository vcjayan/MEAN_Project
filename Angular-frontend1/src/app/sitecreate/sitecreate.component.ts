import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { VILKerala } from '../assetmodel';
import { ApiService } from '../api.service'



@Component({
  selector: 'app-sitecreate',
  templateUrl: './sitecreate.component.html',
  styleUrls: ['./sitecreate.component.css']
})
export class SitecreateComponent implements OnInit {

    RFID="";
    Infra_ID="";
    Infra_owner="";
    Site_name="";
    Zone="";
    District="";
    Tower_type="";
    Tower_height="";
    Site_type="";
    Other_OPCO_count="";
    BTS_position_2G="";
    BTS_make_2G="";
    BTS_BBU_Model_2G="";
    BTS_RRU_model_2G="";
    RRU_Count2G="";
    BTS_ODID_3G="";
    BTS_Position_3G="";
    BTS_BBU_model_3G="";
    BTS_RRU_model_3G="";
    RRU_Count_3G="";
  

  constructor(private apiService:ApiService) { }

  ngOnInit() {
  }

  onSubmit(form:NgForm) {

    const site: VILKerala={

    RFID:form.value.RFID,
    Infra_ID:form.value.Infra_ID,
    Infra_owner:form.value.Infra_owner,
    Site_name:form.value.Site_name,
    Zone:form.value.Zone,
    District:form.value.District,
    Tower_type:form.value.Tower_type,
    Tower_height:form.value.Tower_height,
    Site_type:form.value.Site_type,
    Other_OPCO_count:form.value.Other_OPCO_count,
    BTS_position_2G:form.value.BTS_position_2G,
    BTS_make_2G:form.value.BTS_make_2G,
    BTS_BBU_Model_2G:form.value.BTS_BBU_Model_2G,
    BTS_RRU_model_2G:form.value.BTS_RRU_model_2G,
    RRU_Count2G:form.value.RRU_Count2G,
    BTS_ODID_3G:form.value.BTS_ODID_3G,
    BTS_Position_3G:form.value.BTS_Position_3G,
    BTS_BBU_model_3G:form.value.BTS_BBU_model_3G,
    BTS_RRU_model_3G:form.value.BTS_RRU_model_3G,
    RRU_Count_3G:form.value.RRU_Count_3G
    }

    this.apiService.sendSite(site).subscribe((response)=>{
      console.log(response);
      alert('Successfully created')
      form.reset()
    });

    console.log(JSON.stringify(site));

  }

  
}
