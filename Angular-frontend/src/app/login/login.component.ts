import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { Usercredential} from '../Usercredential'
import { ApiService } from '../api.service'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  Username='';
  Password='';
  
  constructor(private apiService:ApiService) { }


  ngOnInit() {
  }
  
  onLogin(form: NgForm) {
    const user: Usercredential={
      Username:form.value.Username,
      Password:form.value.Password
    }

    this.apiService.sendCredentials(user).subscribe((response)=>{
      console.log(response);
      alert('Successfully passed credentials')

    })
  }
 
}
