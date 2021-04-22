import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientdetails',
  templateUrl: './clientdetails.component.html',
  styleUrls: ['./clientdetails.component.scss']
})
export class ClientdetailsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  addClient(){
    this.router.navigate(['/client/add']);

  }

}
