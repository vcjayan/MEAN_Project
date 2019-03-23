import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';



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
}
