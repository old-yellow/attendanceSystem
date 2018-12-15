import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
<<<<<<< HEAD
import { CoreModule } from './core/core.module';
=======
import { HttpModule } from'@angular/http';
import { ApiService } from './service/api.service';
>>>>>>> 696fc87842192da0ac78cfa00f3c27370d9b9129

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Hero1Component } from './heroes/hero1/hero1.component';
import { Hero2Component } from './heroes/hero2/hero2.component';
import { Hero3Component } from './heroes/hero3/hero3.component';
import { LoginComponent } from './heroes/login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ApiService } from './service/api.service';
import { HttpModule } from '@angular/http';
import { AuthService} from './service/auth.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    Hero1Component,
    Hero2Component,
    Hero3Component,
    LoginComponent,
    NavbarComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    HttpModule,
    FormsModule,
<<<<<<< HEAD
    AppRoutingModule,
    CoreModule,
    ReactiveFormsModule,
  ],
  providers: [ApiService, AuthService],
=======
    AppRoutingModule
    
  ],
  providers: [ApiService],
>>>>>>> 696fc87842192da0ac78cfa00f3c27370d9b9129
  bootstrap: [AppComponent]
})
export class AppModule { }
