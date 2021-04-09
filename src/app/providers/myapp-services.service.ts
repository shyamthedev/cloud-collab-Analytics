import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  environment} from '../../environments/environment';
const uri=environment.uri;

@Injectable({
  providedIn: 'root'
})
export class MyappServicesService {

  constructor(private _http:HttpClient) { }

  register(obj:any){
    return this._http.post(uri+'/users/register',obj);
  }
  login(obj:any){
    return this._http.post(uri+'/users/login',obj);
  }

}
