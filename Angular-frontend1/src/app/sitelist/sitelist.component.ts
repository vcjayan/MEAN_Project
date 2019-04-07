import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { VILKerala } from '../assetmodel'
import { NgForm } from '@angular/forms';




@Component({
  selector: 'app-sitelist',
  templateUrl: './sitelist.component.html',
  styleUrls: ['./sitelist.component.css']
})
export class SitelistComponent implements OnInit {
  
  private details: Array<object> = [];

  constructor(private apiService:ApiService, private router:Router) { }

  ngOnInit() {
    this.getDetails();
    this.refreshList();
    
        
  }
  public getDetails(){
    this.apiService.getDetails().subscribe((data: Array<object>)=>{
      this.details = data;
      console.log(data);
    })
  }
  
  editSite(id){
    this.router.navigate(['/edit', id]);
  }

  deleteSite(id, site){
    if (confirm ('Are you sure to delete this data ?') == true){

    this.apiService.deleteSite(id, site).subscribe((response)=>{
      console.log(response);
      alert ("Deleted successfully")
      })
    };
    
  
  }
  refreshList()  {
    this.apiService.getDetails().subscribe((data:Array<object>)=>{
      this.details=data
    })

  }
  }   

