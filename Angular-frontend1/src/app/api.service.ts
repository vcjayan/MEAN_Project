import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) {  
   }

  getDetails(){
    return this.httpClient.get('http://localhost:3000/database');
  }

  getSitebyId(id){
    return this.httpClient.get('http://localhost:3000/database/'+id);
  }

  sendSite(site){
    return this.httpClient.post('http://localhost:3000/insertsite', site);
  }

  deleteSite(id, site){
    return this.httpClient.delete('http://localhost:3000/database/delete/'+id, site)
  }

  User(user){
    return this.httpClient.post('http://localhost:3000/tokengen', user);
  }

  updateSite(id, site){
    return this.httpClient.put('http://localhost:3000/updatesite/'+id, site)
  }

  registerUser(user){
    return this.httpClient.post('http://localhost:3000/register', user)
  }

  loginUser(user){
    return this.httpClient.post('http://localhost:3000/login', user)
  }
}