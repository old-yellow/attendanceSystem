import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroListComponent }      from './heroes/hero-list/hero-list.component';
import { Hero1Component } from './heroes/hero1/hero1.component';
import { Hero2Component } from './heroes/hero2/hero2.component';
import { Hero3Component } from './heroes/hero3/hero3.component';
const routes: Routes = [
  { path: '', redirectTo: '/hero1', pathMatch: 'full' },
  { path: 'heroes',component: HeroListComponent },
  { path:'hero1',component:Hero1Component},
  { path:'hero2',component:Hero2Component},
  { path:'hero3',component:Hero3Component},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] 
})
export class AppRoutingModule { }
