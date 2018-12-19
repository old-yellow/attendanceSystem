import { Injectable } from '@angular/core';

import { ApiService } from './api.service';
import {Http,Headers} from '@angular/http';
import {Hero} from '../domain/hero';
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private inputData: string[] ;
  private inputData1: string[];
  private clockData:string[];
  private staffData:string[];
  private askStateData:string[];
  private qingjia_data:string[];
  private waichu_data:string[];
  private api_url;
  private headers;

  constructor(private http: Http, private apiService:ApiService) { 
    this.api_url = apiService.getUrl();
    this.headers = apiService.getHeaders();
  }
  getLeavesOne():Promise<Hero[]>{
    const url = `${this.api_url +'/firstAnswer'}`;
    return this.http.get(url, {headers: this.headers})
        .toPromise()
        .then(res => res.json() as Hero[])
        .catch(this.handleError);
  }
  getLeavesTwo():Promise<Hero[]>{
    const url = `${this.api_url +'/secondAnswer' }`;
    return this.http.get(url, {headers: this.headers})
        .toPromise()
        .then(res => res.json() as Hero[])
        .catch(this.handleError);
  }
  getLeavesThree():Promise<Hero[]>{
    const url = `${this.api_url +'/lastAnswer' }`;
    return this.http.get(url, {headers: this.headers})
        .toPromise()
        .then(res => res.json() as Hero[])
        .catch(this.handleError);
  }
  getOutOne():Promise<Hero[]>{
    const url = `${this.api_url +'/firstOutAnswer'}`;
    return this.http.get(url, {headers: this.headers})
        .toPromise()
        .then(res => res.json() as Hero[])
        .catch(this.handleError);
  }
  getOutTwo():Promise<Hero[]>{
    const url = `${this.api_url +'/secondOutAnswer'}`;
    return this.http.get(url, {headers: this.headers})
        .toPromise()
        .then(res => res.json() as Hero[])
        .catch(this.handleError);
  }
  getOutThree():Promise<Hero[]>{
    const url = `${this.api_url +'/lastOutAnswer'}`;
    return this.http.get(url, {headers: this.headers})
        .toPromise()
        .then(res => res.json() as Hero[])
        .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); 
    return Promise.reject(error.message || error);
}


  setInputValue(value) {
    value = " "+ value;
    this.inputData += value;
    console.log(value);
    console.log(this.inputData);
  }

  getInputValue() {
    console.log(this.inputData);
    return this.inputData;

  }
  setInputValue1(value) {
    value = " " + value;
    this.inputData1 += value;
    
  }

  getInputValue1() {
    return this.inputData1;
  }

  setInputStaff(value) {
    value = " " + value;
    this.staffData += value;
    
  }

  getInputStaff() {
    return this.staffData;
  }

 setInputValue_qingjia(value){
   value = " "+value;
   this.qingjia_data += value;
 }

 setInputValue_waichu(value){
  value = " "+value;
  this.waichu_data += value;
}

getClock():Promise<Hero[]>{
  const url = `${this.api_url +'/clockIn'}`;
  return this.http.get(url, {headers: this.headers})
      .toPromise()
      .then(res => res.json() as Hero[])
      .catch(this.handleError);
}

getqingjiaok():Promise<Hero[]>{
  const url = `${this.api_url +'/GetLeaveOK'}`;
  return this.http.get(url, {headers: this.headers})
      .toPromise()
      .then(res => res.json() as Hero[])
      .catch(this.handleError);
}

getwaichuok():Promise<Hero[]>{
  const url = `${this.api_url +'/GetOutOK'}`;
  return this.http.get(url, {headers: this.headers})
      .toPromise()
      .then(res => res.json() as Hero[])
      .catch(this.handleError);
}