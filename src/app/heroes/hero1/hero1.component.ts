import { Component, OnInit,EventEmitter, Input, Output  } from '@angular/core';
import { HeroService } from '../../service/hero.service';

@Component({
  selector: 'app-hero1',
  templateUrl: './hero1.component.html',
  styleUrls: ['./hero1.component.css']
})
export class Hero1Component implements OnInit {
  oneChild;
  constructor(
    private heroService: HeroService
  ) { }
  ngOnInit() {
  }
  saveDate() {
    this.heroService.setInputValue(this.oneChild);
  }
}
