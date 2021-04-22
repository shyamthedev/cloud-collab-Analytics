import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

const uri=environment.uri

@Injectable()
export class AuthService{
    constructor(private _http:HttpClient){}

    register(regForm:any){
        return this._http.post(uri+'/users/register',regForm)
    }
    login(loginForm:any){
        return this._http.post(uri+'/users/login',loginForm)
    }
}