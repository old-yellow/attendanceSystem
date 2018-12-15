import { Component, OnInit } from '@angular/core';
import{Hero} from '../../domain/hero';
import { HeroService } from '../../service/hero.service';
@Component({
  selector: 'app-hero3',
  templateUrl: './hero3.component.html',
  styleUrls: ['./hero3.component.css']
})
export class Hero3Component implements OnInit {
  
  fourChild;
  constructor(
    private heroService: HeroService
  ) { }

  ngOnInit() {
  }
  getDate() {
    this.fourChild = this.heroService.getInputValue1();
  }
}
