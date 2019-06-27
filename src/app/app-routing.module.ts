import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {HomeComponent} from './home/home.component';
import {PageGuardService} from './services/auth/page-guard.service';
import {LoginComponent} from './login/login.component';
import {AuthenticatedGuardService} from './services/auth/authenticated-guard.service';
import {CollaborateComponent} from './collaborate/collaborate.component';
import {CollaborateListComponent} from './collaborate-list/collaborate-list.component';

const routes: Routes = [
  {path: '', component: HomeComponent, canActivate: [PageGuardService]},
  {path: 'login', component: LoginComponent, canActivate: [AuthenticatedGuardService]},
  {path: 'collaborate', component: CollaborateListComponent, canActivate: [PageGuardService]},
  {path: 'collaborate/:id', component: CollaborateComponent, canActivate: [PageGuardService]},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
