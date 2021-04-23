import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RoleService } from '../role.service';

@Component({
  selector: 'app-addrole',
  templateUrl: './addrole.component.html',
  styleUrls: ['./addrole.component.scss'],
})
export class AddroleComponent  {
  addRoleForm:FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private _roleService: RoleService
  ) {
    this. addRoleForm = this.fb.group({
      role: ['', Validators.required],
    });
  }


  addRole() {
    this._roleService.addRole(this.addRoleForm.value).subscribe(
      (response) => {
        const result = response;
        if(result.code){
          this.router.navigate(['/role'])
        }else{
          this.router.navigate(['/role'])
        }
      },
      (error) => {
        console.log(error,'addRole()');
      }
    );
    this.addRoleForm.reset();
  }
  back(){
    this.router.navigate(['/role/roleList/'])
  }
}
