import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MyappServicesService } from 'src/app/providers/myapp-services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  ngForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })

  constructor(private router:Router, private myapp:MyappServicesService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.myapp.login(this.ngForm.value).subscribe(
      (res)=>{
        console.log(res);
        const result:any = res
        if(result.code){
          console.log(result);
            this.router.navigate(['./dashboard'])
          // sessionStorage.setItem("authtoken",result.data)

        }
      }
      
    )
   
  const controls = this.ngForm.controls;

  Object.keys(controls).forEach(key => {
    controls[key].markAsTouched();
  });
  
 }
}
