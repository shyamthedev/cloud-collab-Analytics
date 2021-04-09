import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl} from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user:any={
    name:"",
    email:"",
    password:"",
    number:"",
  }

  ngForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    number: new FormControl('')

  })
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  register(){
    const controls = this.ngForm.controls;
  
    Object.keys(controls).forEach(key => {
      controls[key].markAsTouched();
    });
    console.log(this.ngForm.status);
    
    if(this.ngForm.status=="VALID"){
      this.router.navigate(['./login'])
    }
  }
}
