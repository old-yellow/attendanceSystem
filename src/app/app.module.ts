import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from'@angular/http';
import { ApiService } from './service/api.service';
import { Headers } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroListComponent } from './heroes/hero-list/hero-list.component';
import { HeroDetailComponent } from './heroes/hero-detail/hero-detail.component';
import { Hero1Component } from './heroes/hero1/hero1.component';
import { Hero2Component } from './heroes/hero2/hero2.component';
import { Hero3Component } from './heroes/hero3/hero3.component';
import { Hero4Component } from './heroes/hero4/hero4.component';
@NgModule({
  declarations: [
    AppComponent,
    HeroListComponent,
    HeroDetailComponent,
    Hero1Component,
    Hero2Component,
    Hero3Component,
    Hero4Component
  ],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule
    
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
