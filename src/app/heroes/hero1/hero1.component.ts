import { Component, OnInit,EventEmitter, Input, Output  } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-hero1',
  templateUrl: './hero1.component.html',
  styleUrls: ['./hero1.component.css']
})
export class Hero1Component implements OnInit {
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
