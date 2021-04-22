import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const uri = environment.uri;

@Injectable({
  providedIn: 'root',
})
export class RoleService {
  constructor(private _http: HttpClient) {}

  addRole(data: any) {
    return this._http.post<Response>(uri + '/roles/', data);
  }

  getRoles() {
    return this._http.get<Response>(uri + '/roles/');
  }

  updateRole(roleObj: any) {
    return this._http.put<Response>(uri + '/roles/', roleObj);
  }

  getRoleById(id: any) {
    return this._http.get<Response>(uri + '/roles/' + id);
  }
  deleteRole(id: any) {
    return this._http.delete<Response>(uri + '/roles/' + id);
  }
}

export interface Response {
  status: string;
  code: number;
  data: any;
  message: string;
}
