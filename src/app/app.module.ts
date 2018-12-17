import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
<<<<<<< HEAD
import { CoreModule } from './core/core.module';

=======
import { HttpModule } from'@angular/http';
import { ApiService } from './service/api.service';
import { Headers } from '@angular/http';
>>>>>>> 901002345766d6b5119d9b6ad626a96cdf5f09ea
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
>>>>>>> 901002345766d6b5119d9b6ad626a96cdf5f09ea
  bootstrap: [AppComponent]
})
export class AppModule { }
