import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { EmployeedetailsComponent } from "./employeedetails/employeedetails.component";
import { RolesComponent } from "./roles/roles.component";


@NgModule({
    declarations:[ EmployeedetailsComponent,RolesComponent],
    imports:[RouterModule,FormsModule,ReactiveFormsModule,CommonModule],
    exports:[RouterModule,FormsModule,ReactiveFormsModule,CommonModule],
    providers:[]
}
    
)
export class featureModule{

}