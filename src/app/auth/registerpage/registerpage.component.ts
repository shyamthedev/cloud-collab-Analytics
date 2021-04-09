import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Form } from '@angular/forms';
import { Router } from '@angular/router';

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

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  register() {
  }
}
