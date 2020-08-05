import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserCreateComponent } from './user-create/user-create.component';
import { CoreModule } from '../core/core.module';

const routes: Routes = [{
  path: '',
  component: UserListComponent
}, {
  path: 'create',
  component: UserCreateComponent
}, {
  path: 'edit/:user_id',
  component: UserCreateComponent
}];

@NgModule({
  declarations: [UserListComponent, UserCreateComponent],
  imports: [
    CommonModule, RouterModule.forChild(routes), FormsModule, ReactiveFormsModule, CoreModule
  ]
})
export class UserModule { }
