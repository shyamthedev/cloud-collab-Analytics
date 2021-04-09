import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.scss'],
})
export class EmployeedetailsComponent implements OnInit {
  employeedetails = new FormGroup({
    name: new FormControl('', [Validators.required]),
    street: new FormControl('', [Validators.required]),
    address: new FormGroup({
      city: new FormControl(null, [Validators.required]),
      state: new FormControl(null, [Validators.required]),
    }),
    email: new FormControl(''),
    pincode: new FormControl(''),
    contactNumber: new FormControl(''),
  });

  selectedState: any;
  cities: any = [];

  states: any = [
    {
      state: 'AndhraPradesh',
      city: ['Tirupati', 'Vijayawada', 'Vizag', 'Kurnool', 'chittor', 'kadapa'],
    },
    { state: 'Telangana', city: ['Hyderabad', 'warangal'] },
    { state: 'Karnataka', city: ['Banglore', 'mysore'] },
    { state: 'TamilNadu', city: ['chennai', 'pondy'] },
  ];

  constructor() {}

  ngOnInit(): void {}

  chooseState() {
    this.selectedState = this.states.filter((el:any)=>el.state === this.employeedetails.get('address')?.get('state')?.value)
    this.cities = [...this.selectedState[0]['city']];
  }
  register() {
    console.log(this.employeedetails);
    
  }

  get city() {
    return this.employeedetails.get('address')?.get('city')
  }

}
