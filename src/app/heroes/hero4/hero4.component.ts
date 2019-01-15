import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero4',
  templateUrl: './hero4.component.html',
  styleUrls: ['./hero4.component.css']
})
export class Hero4Component implements OnInit {

  constructor(
    private router : Router
  ) { }
  onClickToAdd() {
    this.router.navigate(['submit']);
  }
  onClickToSearch() {
    this.router.navigate(['answer']);
  }
  ngOnInit() : void {
  }

}
