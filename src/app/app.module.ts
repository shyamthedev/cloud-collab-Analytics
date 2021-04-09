import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from './providers/auth.service';
import { ProfileComponent } from './views/profile/profile.component';
import { HttpClientModule } from "@angular/common/http";
import { MapsComponent } from './views/maps/maps.component';
import { AgmCoreModule } from '@agm/core';
import { RouterModule } from '@angular/router'
import { LoginpageComponent } from './apps/loginpage/loginpage.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterpageComponent } from './registerpage/registerpage.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component'


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    MapsComponent,
    AppComponent,
    LoginpageComponent,
    DashboardComponent,
    RegisterpageComponent,
    ForgetpasswordComponent],
   
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDnsjl3OkMu6jvl6XOlyGN2DFFDDw1kbGc'
    }),
    AppRoutingModule,HttpClientModule],

  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
