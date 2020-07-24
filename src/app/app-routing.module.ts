import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuardService } from './services/auth-guard.service';
import { HomeGuardService } from './services/home-guard.service';
import { RoleGuardService } from './services/role-guard.service';

const routes: Routes = [{
  path: '',
  canActivate: [HomeGuardService],
  component: LoginComponent
}, {
  path: 'home',
  canActivate: [AuthGuardService],
  component: HomeComponent,
  children: [{
    path: 'users',
    canActivate: [RoleGuardService],
    loadChildren: './user/user.module#UserModule'
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
