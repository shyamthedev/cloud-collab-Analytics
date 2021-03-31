import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl, Form} from '@angular/forms';
import { Router } from '@angular/router';
import { MyappServicesService } from '../providers/myapp-services.service';

@Component({
  selector: 'app-registerpage',
  templateUrl: './registerpage.component.html',
  styleUrls: ['./registerpage.component.scss']
})
export class RegisterpageComponent implements OnInit {

 
  registerForm = new FormGroup({
    name: new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    

  })

  constructor(private router:Router,private _auth:MyappServicesService) { }

  ngOnInit(): void {
  }
register(){
  const controls = this.registerForm.controls;

  Object.keys(controls).forEach(key => {
    controls[key].markAsTouched();
  });
  // console.log(ngForm.status);
  console.log(this.registerForm.value);
  
 this._auth.register(this.registerForm.value).subscribe(
   (res)=>{
     console.log(res);

   },
   (error)=>{
     console.log(error);
     
   }
 )
    this.router.navigate(['./login'])
  
}

}
