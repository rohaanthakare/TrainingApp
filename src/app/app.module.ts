import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

// PrimeNG Modules
import { MenuModule } from 'primeng/menu';
// import { MenuItem } from 'primeng/api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UserModule } from './user/user.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserInfoService } from './services/user-info.service';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule,FormsModule, HttpClientModule,
    AppRoutingModule, UserModule, MenuModule
  ],
  providers: [{
    multi: true,
    provide: HTTP_INTERCEPTORS,
    useClass: UserInfoService
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
