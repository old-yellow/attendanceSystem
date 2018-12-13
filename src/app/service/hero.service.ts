import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private inputData: string[] ;
  private inputData1: string[];
  constructor() { }
  setInputValue(value) {
    value = " "+ value;
    this.inputData += value;
  }

  getInputValue() {
    return this.inputData;
  }
  setInputValue1(value) {
    value = " " + value;
    this.inputData1 += value;
  }

  getInputValue1() {
    return this.inputData1;
  }
}
