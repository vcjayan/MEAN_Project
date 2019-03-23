import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  getDetails(){
    return this.httpClient.get('http://localhost:3000/database');
  }

  getSitebyId(id){
    return this.httpClient.get('http://localhost:3000/database/'+id);
  }

  sendSite(site){
    return this.httpClient.post('http://localhost:3000/insertsite', site);
  }

  deleteSite(id){
    return this.httpClient.get('http://:3000/database/delete/:id', id)
  }

  authUser(user){
    return this.httpClient.post('http://localhost:3000/authenticate', user);
  }
}
