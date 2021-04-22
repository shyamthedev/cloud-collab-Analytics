import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoleService } from '../role.service';

@Component({
  selector: 'app-rolelist',
  templateUrl: './rolelist.component.html',
  styleUrls: ['./rolelist.component.scss']
})
export class RolelistComponent implements OnInit {


  constructor(private router:Router,private _roleService:RoleService) { }
  
  
  todayDate= new Date();
  getroles:any=[]
  editrole:any={
    id:'',
    role_Name:''

  }


  ngOnInit(): void {
    this.getRoles()
  }
  addRole(){
    this.router.navigate(['/role/addrole']);

  }
  editRole(role:any){
    this.router.navigate(['/role/editrole',role._id])
  }

  getRoles(){
    this._roleService.getRoles().subscribe(
      (res)=>{
        let result:any=res
        if(result.code){
          this.getroles=result.data
        }
        
        
      },
      (error)=>{
        console.log(error);
        
      }
    )
  }
  deleteRole(id:any){
    this._roleService.deleteRole(id).subscribe(
      (res)=>{
        const result=res
        if(result.code){
          this.getRoles()
        }
      },
      (error)=>{
          console.log(error);
          
      }
    )
  }


  showDetails(role:any){
    this.router.navigate(['/role/roledetails',role._id])
  }

}
