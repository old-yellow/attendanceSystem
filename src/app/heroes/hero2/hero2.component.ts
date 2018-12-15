import { Component, OnInit } from '@angular/core';
import{Hero} from '../../domain/hero';

import { HeroService } from '../../service/hero.service';

@Component({
  selector: 'app-hero2',
  templateUrl: './hero2.component.html',
  styleUrls: ['./hero2.component.css']
})
export class Hero2Component implements OnInit {
  getdata;
  savedata;
  savestaff;
  leavedata;
  outdata;
  leave:Array<Hero>;
  out:Array<Hero>;
  constructor(
    private heroService: HeroService
  ) { }

  ngOnInit() {
  }
  getDate() {
    this.getdata = this.heroService.getInputValue();
  }
  saveDate() {
    this.heroService.setInputValue1(this.savedata);
  }
  saveStaffDate() {
    this.heroService.setInputStaff(this.savestaff);
  }
  getLeaveDate(){
    this.leavedata = this.heroService. getLeavesTwo()
    .then(result =>{
      console.log(result);
      this.leave = result;
      
    });
  }
  deleteLeaveDate(){
    alert("反馈信息给员工");
    this.leave = [];
  }
  hintleave(){
    alert("反馈信息给总经理");
    this.leave =[];
  }

  getOutDate(){
    this.outdata = this.heroService. getOutTwo()
    .then(result =>{
      console.log(result);
      this.out = result;
      
    });
  }
  deleteOutDate(){
    alert("反馈信息给员工");
    this.out = [];
  }
  hintout(){
    alert("反馈信息给总经理");
    this.out =[];
  }
}
