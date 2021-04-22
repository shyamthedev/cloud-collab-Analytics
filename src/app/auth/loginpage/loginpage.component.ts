import { group } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent implements OnInit {
 
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })

  constructor(private router:Router,private _authservice:AuthService) { }

  ngOnInit(): void {

  }

  onSubmit(){
    this.router.navigate(['/role'])
    console.log(this.loginForm.value);
    // this._authservice.login(this.loginForm.value).subscribe(
    //   (res)=>{
    //     let result:any=res
    //     if(result.code){
          
    //     }
    //   }
    // )
 }
}
