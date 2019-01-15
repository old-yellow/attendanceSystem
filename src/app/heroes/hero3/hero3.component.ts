import { Component, OnInit } from '@angular/core';
import{Hero} from '../../domain/hero';
import { HEROES } from '../../mock-heroes';
import { HeroService } from '../../service/hero.service';
import { Router } from '../../../../node_modules/@angular/router';
@Component({
  selector: 'app-hero3',
  templateUrl: './hero3.component.html',
  styleUrls: ['./hero3.component.css']
})
export class Hero3Component implements OnInit {
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
