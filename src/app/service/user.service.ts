import { Injectable } from '@angular/core';

import { Http, Headers, Response } from '@angular/http';

import { User } from '../domain/user';
import { ApiService } from './api.service';


@Injectable()
export class UserService {

  private api_url : string ;
  private headers : Headers ;

  constructor(private http: Http, private apiService: ApiService) {
      this.api_url = apiService.getUrl() + '/users';
      this.headers = apiService.getHeaders();
  }

  //按id查询User
  getUserById(id: string): Promise<User> {
    const url = `${this.api_url}/?userId=${id}`;
    return this.http.get(url, { headers: this.headers })
      .toPromise()
      .then(res => res.json()[0] as User)
      .catch(this.handleError);
  }

  getUser(): Promise<User[]> {
    const url = `${this.api_url}`;
    return this.http.get(url, { headers: this.headers })
      .toPromise()
      .then(res => res.json() as User[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
