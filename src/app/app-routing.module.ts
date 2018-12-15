import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent} from './heroes/login/login.component';
import { Hero1Component } from './heroes/hero1/hero1.component';
import { Hero2Component } from './heroes/hero2/hero2.component';
import { Hero3Component } from './heroes/hero3/hero3.component';
import { AuthGuardService } from './service/auth-guard.service';
const routes: Routes = [
  { path: '', redirectTo: 'heroes/login', pathMatch: 'full' },
  { path: 'heroes/login', component: LoginComponent},
  { path: 'hero1', component: Hero1Component },
  { path: 'hero2', component: Hero2Component },
  { path: 'hero3', component: Hero3Component },
  // {
  //   path: 'hero1',
  //   canActivate: [AuthGuardService],
  //   loadChildren: 'app/hero/hero1.module#Hero1Module'
  // }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
