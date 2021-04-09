import { NgModule } from "@angular/core";
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AuthRoutingModule } from "./auth-routing.module";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations:[LoginComponent, RegisterComponent, ForgetPasswordComponent],
    imports:[RouterModule,FormsModule,ReactiveFormsModule,AuthRoutingModule,CommonModule],
    exports:[RouterModule,FormsModule,ReactiveFormsModule,AuthRoutingModule,CommonModule],
    providers:[]
})
export class AuthModule{

}