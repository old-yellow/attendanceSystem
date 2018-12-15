import { Component, OnInit } from '@angular/core';
import{Hero} from '../../domain/hero';

import { HeroService } from '../../service/hero.service';

@Component({
  selector: 'app-hero2',
  templateUrl: './hero2.component.html',
  styleUrls: ['./hero2.component.css']
})
export class Hero2Component implements OnInit {
  twoChild;
  threeChild;
  constructor(
    private heroService: HeroService
  ) { }

  ngOnInit() {
  }
  getDate() {
    this.twoChild = this.heroService.getInputValue();
  }
  saveDate() {
    this.heroService.setInputValue1(this.threeChild);
  }
}
