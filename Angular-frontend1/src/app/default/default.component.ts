import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router'


@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {
  username='';
  password='';

  constructor(private apiService: ApiService, private router:Router) { }

  ngOnInit() {
  }

  onLogin(){
    const user = {
      username: this.username,
      password: this.password,
    }

    this.apiService.authUser(user).subscribe(data =>{
      if (!data){
        alert("Invalid credentials")
      }
      else{
        alert('Logged in');
        this.router.navigate[('')]
      }
    });
    
  }
  
}
