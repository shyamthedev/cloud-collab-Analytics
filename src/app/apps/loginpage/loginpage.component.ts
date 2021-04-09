import { group } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})

export class LoginpageComponent implements OnInit {
  user: any = {
    email : "",
    password : ""
  }
  ngForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })

  constructor(private router:Router) { }

  ngOnInit(): void {

  }

  onSubmit(){
   
    
  const controls = this.ngForm.controls;

  Object.keys(controls).forEach(key => {
    controls[key].markAsTouched();
  });
  console.log(this.ngForm.status);
  
  if(this.ngForm.status=="VALID"){
    this.router.navigate(['./dashboard'])
  }
   
 }
}
