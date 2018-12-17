import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CoreModule } from './core/core.module';

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
    AppRoutingModule,
    CoreModule,
    ReactiveFormsModule,
  ],
  providers: [ApiService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
