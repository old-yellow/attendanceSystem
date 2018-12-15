import { Component, OnInit,EventEmitter, Input, Output  } from '@angular/core';
import { HeroService } from '../../service/hero.service';
import { Hero } from '../../domain/hero';

@Component({
  selector: 'app-hero1',
  templateUrl: './hero1.component.html',
  styleUrls: ['./hero1.component.css']
})
export class Hero1Component implements OnInit {
  savedata;
  staffdata;
  leavedate;
  outdate;
  leave:Array<Hero>;
  out:Array<Hero>;
  constructor(
    private heroService: HeroService
  ) { }
  ngOnInit() {
  }  
  
  getLeavesDate(){
    this.leavedate = this.heroService. getLeavesOne()
    .then(result =>{
      this.leave = result;
    });
  }
  deleteLeavesDate(){
    this.leave = [];
    alert("反馈信息给员工");
  }
   saveDate() {
    this.heroService.setInputValue(this.savedata);
  }
  saveStaffDate() {
    this.heroService.setInputStaff(this.savedata);
  }
  getOutDate(){
    this.outdate = this.heroService. getOutOne()
    .then(result =>{
      console.log(result);
      this.out = result;
    });
  }
  deleteOutDate(){
    alert("反馈信息给员工");
    this.out = [];
  }

  hintLeave(){
    alert("反馈信息给副总经理");
    this.leave =[];
  }
  hintOut(){
    alert("反馈信息给副总经理");
    this.out =[];
  }
}
