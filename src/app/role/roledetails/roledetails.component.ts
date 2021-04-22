import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RoleService } from '../role.service';

@Component({
  selector: 'app-roledetails',
  templateUrl: './roledetails.component.html',
  styleUrls: ['./roledetails.component.scss']
})
export class RoledetailsComponent implements OnInit {

  constructor(private _roleService:RoleService,private _activateRoute:ActivatedRoute,private router:Router) { }

  roledetails:any

  ngOnInit(): void { 
    this.getRoleById(this._activateRoute.snapshot.paramMap.get('id'))

  }
  getRoleById(id:any){
    console.log("this isid",   id);
    this._roleService.getRoleById(id).subscribe(
      (response)=>{
        let result=response
        if(result.code){
          console.log(result.data);
          this.roledetails=result.data
          
        }
      }
    )
    
    
  }
  back(){
    this.router.navigate(['/role'])
  }

  



}
