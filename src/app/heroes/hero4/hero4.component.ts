import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../service/hero.service';
import { Hero } from '../../domain/hero';

@Component({
  selector: 'app-hero4',
  templateUrl: './hero4.component.html',
  styleUrls: ['./hero4.component.css']
})
export class Hero4Component implements OnInit {
  savedata_qingjia;
  savedata_waichu;
  clock;
  qingjia_ok;
  waichu_ok;
  clockin:Array<Hero>;
  qingjiaok:Array<Hero>;
  waichuok:Array<Hero>;
  constructor(
    private heroService: HeroService
  ) { }
  ngOnInit() {
  }
  saveDate_qingjia(){
    this.heroService.setInputValue_qingjia(this.savedata_qingjia);
  }

  saveDate_waichu(){
    this.heroService.setInputValue_qingjia(this.savedata_waichu);
  }
  
  getClockIn(){
    this.clock = this.heroService.getClock()
    .then(result =>{
      this.clockin = result;
    });
   
  }

  get_qingjiaok(){
    this.qingjia_ok = this.heroService. getqingjiaok()
    .then(result =>{
      this.qingjiaok = result;
    });
  }

  get_waichuok(){
    this.waichu_ok = this.heroService. getwaichuok()
    .then(result =>{
      this.waichuok = result;
    });
  }
}
