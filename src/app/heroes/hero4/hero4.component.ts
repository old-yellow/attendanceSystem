import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../service/hero.service';
import { Hero } from '../../domain/hero';

@Component({
  selector: 'app-hero4',
  templateUrl: './hero4.component.html',
  styleUrls: ['./hero4.component.css']
})
export class Hero4Component implements OnInit {

  constructor(
    private heroService: HeroService
  ) { }
  ngOnInit() {
  }
  getResult(){
  }
  
  getClkIn(){
    alert()
    }
  
  saveleave(){
  }

  saveout(){
  }
}
