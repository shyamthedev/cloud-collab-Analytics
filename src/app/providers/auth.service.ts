import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http:HttpClient) { }
  getMe(){
    return this._http.get('/users/me')
    
  }
  logout() {
    return this._http.post('/users/logout', {});
  }





}
