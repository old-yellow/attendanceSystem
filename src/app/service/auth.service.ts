import { Injectable, Inject } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import { Auth } from '../domain/auth';


@Injectable()
export class AuthService {

  constructor(private http: Http, @Inject('user') private userService) { }

  loginWithCredentials(userId: string, password: string): Promise<Auth> {
    return this.userService.getUserById(userId)  //调用UserService中的方法来查找user
      .then(user => {
        console.log("user "+ user.id)
        let auth = new Auth();
        localStorage.clear;
      console.log( "11"+user.userId)
        if(user.userId < 10){
          localStorage.setItem('redirectUrl', 'hero3');
        }else if(user.userId < 100){
          localStorage.setItem('redirectUrl', 'hero2');
        }else if(user.userId < 1000){
          localStorage.setItem('redirectUrl', 'hero1');
        }else if(user.userId < 10000){
          localStorage.setItem('redirectUrl', 'hero4');
        }
        if (null === user) {
          //没找到user
          auth.hasError = true;
          auth.errMsg = 'user not found';
        } else if (password === user.password) {
          //找到user并与密码匹配成功
          auth.user = Object.assign({}, user);
          auth.hasError = false;
          localStorage.setItem('userId', user.id);
        } else {
          //密码错误
          auth.hasError = true;
          auth.errMsg = 'password not match';
        }
        return auth;
      })
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}