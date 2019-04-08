import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) {  
   }

  getDetails(){
    return this.httpClient.get('database');
  }

  getSitebyId(id){
    return this.httpClient.get('database/'+id);
  }

  sendSite(site){
    return this.httpClient.post('insertsite', site);
  }

  deleteSite(id, site){
    return this.httpClient.delete('database/delete/'+id, site)
  }

  updateSite(id, site){
    return this.httpClient.put('updatesite/'+id, site)
  }

  registerUser(user){
    return this.httpClient.post('register', user)
  }

  loginUser(user){
    return this.httpClient.post('login', user)
  }
}