import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from './core/core.module';

import { HttpModule } from'@angular/http';
import { ApiService } from './service/api.service';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroListComponent } from './heroes/hero-list/hero-list.component';
import { HeroDetailComponent } from './heroes/hero-detail/hero-detail.component';
import { Hero1Component } from './heroes/hero1/hero1.component';
import { Hero2Component } from './heroes/hero2/hero2.component';
import { Hero3Component } from './heroes/hero3/hero3.component';
import { Hero4Component } from './heroes/hero4/hero4.component';
import { AuthService } from './service/auth.service';
import { LoginComponent } from './heroes/login/login.component';
import { SearchBookComponent } from './heroes/search-book/search-book.component';
import { DeleteBookComponent } from './heroes/delete-book/delete-book.component';
import { BookDetailsComponent } from './app/book-details/book-details.component';
import { AddBookComponent } from './heroes/add-book/add-book.component';
import { SubmitRequestComponent } from './heroes/submit-request/submit-request.component';
import { SearchAnswerComponent } from './heroes/search-answer/search-answer.component';
@NgModule({
  declarations: [
    NavbarComponent,
    AppComponent,
    HeroListComponent,
    HeroDetailComponent,
    Hero1Component,
    Hero2Component,
    Hero3Component,
    Hero4Component,
    LoginComponent,
    SearchBookComponent,
    DeleteBookComponent,
    BookDetailsComponent,
    AddBookComponent,
    SubmitRequestComponent,
    SearchAnswerComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    CoreModule,
    ReactiveFormsModule,
  ],
  providers: [ApiService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
