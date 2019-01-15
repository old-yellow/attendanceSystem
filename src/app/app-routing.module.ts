import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroListComponent }      from './heroes/hero-list/hero-list.component';
import { Hero1Component } from './heroes/hero1/hero1.component';
import { Hero2Component } from './heroes/hero2/hero2.component';
import { Hero3Component } from './heroes/hero3/hero3.component';
import { Hero4Component } from './heroes/hero4/hero4.component';
import { LoginComponent } from './heroes/login/login.component';
import { SearchBookComponent } from './heroes/search-book/search-book.component';
import { DeleteBookComponent } from './heroes/delete-book/delete-book.component';
import { AddBookComponent } from './heroes/add-book/add-book.component';
import { SubmitRequestComponent } from './heroes/submit-request/submit-request.component';
import { SearchAnswerComponent} from './heroes/search-answer/search-answer.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login',component: LoginComponent },
  { path: 'heroes',component: HeroListComponent },
  { path:'hero1',component:Hero1Component},
  { path:'hero2',component:Hero2Component},
  { path:'hero3',component:Hero3Component},
  { path:'hero4',component:Hero4Component},
  { path:'search',component:SearchBookComponent},
  { path:'delete',component:DeleteBookComponent},
  { path:'add',component:AddBookComponent},
  { path:'submit',component:SubmitRequestComponent},
  { path:'answer',component:SearchAnswerComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] 
})
export class AppRoutingModule { }
