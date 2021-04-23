import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RoleService } from '../role.service';

@Component({
  selector: 'app-editrole',
  templateUrl: './editrole.component.html',
  styleUrls: ['./editrole.component.scss'],
})
export class EditroleComponent {
  updateRoleForm = this.fb.group({
    role: ['', Validators.required],
  });
  currentRoleId: any;

  constructor(
    private fb: FormBuilder,
    private _roleService: RoleService,
    private _activateRoute: ActivatedRoute,
    private router: Router
  ) 
  {
    this.getRoleById(this._activateRoute.snapshot.paramMap.get('id'));
  }

  getRoleById(id: any) {
    this._roleService.getRoleById(id).subscribe(
      (response) => {
        const result = response;
        if (result.code) {
          this.updateRoleForm.controls['role'].setValue(result.data.role);
          this.currentRoleId = result.data._id;
        } else {
        }
      },
      (error) => {
        console.log(error, 'getRoleById');
      }
    );
  }

  updateRole() {
    const obj = {
      id: this.currentRoleId,
      role: this.updateRoleForm.value.role,
    };
    this._roleService.updateRole(obj).subscribe(
      (response) => {
        const result = response;
        if(result.code){
          this.router.navigate(['/role/roleList']);
        }else{
          this.router.navigate(['/role/roleList']);
        }
      },
      (error) => {
        console.log(error, 'updateRole()');
      }
    );
    this.updateRoleForm.reset();
  }
  back(){
    this.router.navigate(['/role'])
  }
}
