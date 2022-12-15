import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SimpleLoginComponent } from './simple-login/simple-login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './dashboard/login/login.component';
import { RegistrationComponent } from './dashboard/registration/registration.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { WelcomepageComponent } from './simple-login/welcomepage/welcomepage.component';
import { MenuComponent } from './dashboard/menu/menu.component';
import { UserListComponent } from './dashboard/user-list/user-list.component';
import { UserService } from './user.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth.service';
import { RegComponent } from './reg/reg.component';



@NgModule({
  declarations: [
    AppComponent,
    SimpleLoginComponent,
    DashboardComponent,
    LoginComponent,
    RegistrationComponent,
    WelcomepageComponent,
    MenuComponent,
    UserListComponent,
    RegComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UserService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
