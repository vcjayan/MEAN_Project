import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpclient:HttpClient) { }

  sendCredentials(user){
    return this.httpclient.post('http://localhost:3000/insertapi', user)
  }
}
