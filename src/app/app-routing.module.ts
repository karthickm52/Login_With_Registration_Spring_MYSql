import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './dashboard/login/login.component';
import { RegistrationComponent } from './dashboard/registration/registration.component';
import { UserListComponent } from './dashboard/user-list/user-list.component';
import { RegComponent } from './reg/reg.component';
// import { UserListComponent } from './dashboard/user-list/user-list.component';
// import { SimpleLoginComponent } from './simple-login/simple-login.component';
import { WelcomepageComponent } from './simple-login/welcomepage/welcomepage.component';

const routes: Routes = [

  {path:'', component:LoginComponent},
  {path:'login',component:LoginComponent},

  {path:'user/:username',component:UserListComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'reg',component:RegComponent}


]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
