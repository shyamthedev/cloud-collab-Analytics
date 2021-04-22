import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { AuthService } from './auth.service';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { RegisterpageComponent } from './registerpage/registerpage.component';

@NgModule({
  imports: [FormsModule, RouterModule, ReactiveFormsModule, AuthRoutingModule,CommonModule],
  declarations: [
    LoginpageComponent,
    RegisterpageComponent,
    ForgetpasswordComponent,
    AuthComponent,
  ],
  providers: [AuthService],
  exports: [FormsModule, RouterModule, ReactiveFormsModule,AuthRoutingModule,HttpClientModule],
})
export class AuthModule {}
