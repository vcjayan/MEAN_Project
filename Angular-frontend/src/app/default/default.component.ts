import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router'
import { NgForm } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {

  statusText:string;  
  serverErrorMessage:string;
  public error: any; 
  username='';
  password='';
  email=''

  constructor(private apiService: ApiService, private router:Router) { }

  ngOnInit() {
  }

  displaytoggle(form:NgForm){
  
    var login=document.getElementById("login");
   if (login.style.display==='none'){
       login.style.display='flex'
   }
   else{
       login.style.display='none'
   }   
   
   var register=document.getElementById("register");
   if (register.style.display==='none'){
       register.style.display='flex'
   }
   else{
       register.style.display='none'
   }
   form.reset();
}

onLogin(form:NgForm){

  const user = {
    username: form.value.username,
    email: form.value.email,
    password: form.value.password
  }
  
  this.apiService.loginUser(user).subscribe((response=>{        
    console.log("Logged in")                 
    form.reset();
    this.router.navigate(['/main']);
  }))
}
  

  onRegister(form:NgForm){
    
    const user = {
      username: form.value.username,
      email: form.value.email,
      password: form.value.password
    }
    this.apiService.registerUser(user).subscribe((response =>{
      console.log(response);
        alert('Succeffully registered');
        form.reset();
        this.router.navigate[('/main')]
      }));
      
      
  }}

