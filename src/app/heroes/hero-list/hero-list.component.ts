import { Component, OnInit } from '@angular/core';

import { Hero } from '../../domain/hero';
import { HEROES } from '../../mock-heroes';
import { HeroService } from '../../service/hero.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

  constructor(private heroService: HeroService) { }
  time:Array<Hero>;
  twoChild;
  getDate() {
    this.twoChild = this.heroService. getLeavesOne()
    .then(result =>{
      this.time = result;
    });
  }
  deleteDate(){
this.time = [];
  }
  ngOnInit() {
  }

}
