import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-clienedit',
  templateUrl: './clienedit.component.html',
  styleUrls: ['./clienedit.component.scss']
})
export class ClieneditComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  
}
