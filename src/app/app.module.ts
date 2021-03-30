import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginpageComponent } from './apps/loginpage/loginpage.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterpageComponent } from './registerpage/registerpage.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component'
@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    DashboardComponent,
    RegisterpageComponent,
    ForgetpasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
