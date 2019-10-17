import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators'
import { throwError } from 'rxjs';
import { Userdata } from './usermodel'





@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private httpClient: HttpClient) {  
   }

   getZone(){
    return this.httpClient.get('http://localhost:3000/zone');
  }

  getDistrict(Districts_zoneid){
    return this.httpClient.get('http://localhost:3000/district/'+Districts_zoneid);
  }

   getDetails(){
    return this.httpClient.get('http://localhost:3000/database');
  }

  getSitebyId(id){
    return this.httpClient.get('http://localhost:3000/database/'+id);
  }

  sendSite(site){
    return this.httpClient.post('http://localhost:3000/insertsite', site).pipe(catchError(this.handleError))
  }

  deleteSite(id, site){
    return this.httpClient.delete('http://localhost:3000/database/delete/'+id, site)
  }

  User(user){
    return this.httpClient.post('http://localhost:3000/tokengen', user);
  }

  updateSite(id, site){
    return this.httpClient.put('http://localhost:3000/updatesite/'+id, site)
  };

  registerUser(user){
    return this.httpClient.post('http://localhost:3000/register', user)
  }

  loginUser(user){
    return this.httpClient.post('http://localhost:3000/login', user).pipe(catchError(this.handleError))
      }

      handleError(error: HttpErrorResponse){
        console.log("Invalid credentials");
        window.alert('Invalid or blank fields');
        return throwError(error);       
        }
}

