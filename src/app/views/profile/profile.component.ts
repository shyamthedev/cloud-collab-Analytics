import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/providers/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  password: any = {
    oldPassword: '',
    newPassword: '',
  };
  authService: any;
  constructor(private _router:Router,private _auth:AuthService) { }

  ngOnInit(): void {
    this.getMe()
  }
  me:any = {
    name:'',
    emai:'',
    phone:''
  }


 
  getMe(){

    // this._auth.getMe().subscribe(
    //   ()=>{
    //     const result = ;
    //     if(result.code){
    //       this.me  = {...result.data }
    //     }
    //   },
    //   (err)=>{

    //   }
    // )

 
  }

  resetPassword() {
    this.authService.resetPassword(this.password).subscribe(
      (res: any) => {
        console.log(res);
      },
      (error: any) => {
        console.log(error, 'resetPassword()');
      }
    );
  }
  logoutAllDevices(){

  }

  logout() {
    this.authService.logout().subscribe(
      (res: any) => {
        const result =  res;
        if(result.code){
          // sessionStorage.clear();
          // this._router.navigate(['/login'])
        }
      },
      (error: any) => {
        console.error(error, 'logout()');
      }
    );
  }

  logoutAll() {
  
  }
  back(){
    this._router.navigate(['./'])
  }
}


