import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ForgetpasswordComponent } from "../forgetpassword/forgetpassword.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";

export const authRoutes:Routes = [
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'register',
        component:RegisterComponent
    },
    {
        path:'forget-password',
        component:ForgetpasswordComponent
    }
]

@NgModule({
    imports: [RouterModule.forRoot(authRoutes)],
    exports: [RouterModule]
  })
  export class AuthRoutingModule { }