import { Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { EmployeedetailsComponent } from "./employeedetails/employeedetails.component";
import { RolesComponent } from "./roles/roles.component";



export const featureRoutes:Routes = [
    {
        path:'employeedetails',
        component: EmployeedetailsComponent
    },
    {
        path: 'roles',
        component: RolesComponent
    },
    {    
        path: 'dashboard',
        component: DashboardComponent
    }
]
