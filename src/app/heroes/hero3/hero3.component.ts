import { Component, OnInit } from '@angular/core';
import{Hero} from '../../domain/hero';
import { HeroService } from '../../service/hero.service';
@Component({
  selector: 'app-hero3',
  templateUrl: './hero3.component.html',
  styleUrls: ['./hero3.component.css']
})
export class Hero3Component implements OnInit {
  getdata;
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
    this.getdata = this.heroService.getInputValue1();
  }
  saveStaffDate() {
    this.heroService.setInputStaff(this.savestaff);
  }
  getLeaveDate(){
    this.leavedata = this.heroService. getLeavesThree()
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
    alert("反馈信息给员工");
    this.leave =[];
  }

  getOutDate(){
    this.outdata = this.heroService. getOutThree()
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
    alert("反馈信息给员工");
    this.out =[];
  }
}
