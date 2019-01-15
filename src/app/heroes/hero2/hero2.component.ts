import { Component, OnInit } from '@angular/core';

import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-hero2',
  templateUrl: './hero2.component.html',
  styleUrls: ['./hero2.component.css']
})
export class Hero2Component implements OnInit {
  constructor(private router: Router) {}

  
  onClickToSearch() {
    this.router.navigate(['search']);
  }
  onClickToOlds() {
    this.router.navigate(['delete']);
  }
  onClickToAdd() {
    this.router.navigate(['add']);
  }
  ngOnInit(): void {}
}
