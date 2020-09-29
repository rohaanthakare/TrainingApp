import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserCreateComponent } from './user-create/user-create.component';
import { CoreModule } from '../core/core.module';

// PrimeNG Modules
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import { InputMaskModule } from 'primeng/inputmask';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ToastModule } from 'primeng/toast';

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
    CommonModule, RouterModule.forChild(routes), FormsModule, ReactiveFormsModule,
    InputTextModule, ButtonModule, PasswordModule, InputMaskModule, CalendarModule, DropdownModule,
    AutoCompleteModule, ToastModule,
    CoreModule
  ]
})
export class UserModule { }
