import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapsComponent } from './views/maps/maps.component';
import { ProfileComponent } from './views/profile/profile.component';
import { LoginpageComponent } from './apps/loginpage/loginpage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { RegisterpageComponent } from './registerpage/registerpage.component';



const routes: Routes = [
  {
    path:'',
    redirectTo:'/login',
    pathMatch:'full'
  },
  {
    path: 'login',
    component: LoginpageComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'registration',
    component: RegisterpageComponent
  },
  {
    path: 'change-password',
    component: ForgetpasswordComponent
  },
  {path : 'map',
  component:MapsComponent 
  },
  {path : 'profile', 
  component:ProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
