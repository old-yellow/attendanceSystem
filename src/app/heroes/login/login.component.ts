import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Auth } from '../../domain/auth';
import { AuthService} from '../../service/auth.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';
  auth: Auth;
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private authService: AuthService, private router: Router) { }


  ngOnInit() {
  }

  onSubmit(){
    this.authService
      .loginWithCredentials(this.loginForm.value.username, this.loginForm.value.password)
      .then(auth => {
        console.log(auth)
        // let redirectUrl = (auth.redirectUrl === null)? '/': auth.redirectUrl;
        console.log(localStorage.getItem('redirectUrl'));
        let redirectUrl = localStorage.getItem('redirectUrl');
        if(!auth.hasError){
          this.router.navigate([redirectUrl]);
          localStorage.removeItem('redirectUrl');
          // location.reload();
        } else {
          this.auth = Object.assign({}, auth);
        }
      });
  }

}
