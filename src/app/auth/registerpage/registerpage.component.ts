import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Form, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-registerpage',
  templateUrl: './registerpage.component.html',
  styleUrls: ['./registerpage.component.scss']
})
export class RegisterpageComponent implements OnInit {


  registrationForm=this.fb.group({
    name:['',Validators.required],
    phone:['',Validators.required],
    email:['',Validators.required],
    password:['',Validators.required]
  })

  constructor(private router: Router,private fb:FormBuilder,private _auth:AuthService) { }

  ngOnInit(): void {
  }
  formSubmit(regForm:NgForm){
    console.log(this.registrationForm);
    this._auth.register(regForm).subscribe(
      (res)=>{
        let result:any=res
        console.log(res);
        
        if(result.code){
          this.router.navigate(['/auth/login'])
        }
      },
      (error)=>{
        console.log(error);
        

      }
    )

    
    
  }
}
