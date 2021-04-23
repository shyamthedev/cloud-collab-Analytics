import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { AuthModule } from './auth/auth.module';
// import { RoleModule } from './role/role.module';
@NgModule({
  declarations: [
    AppComponent,
    ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AuthModule,
    // RoleModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
