import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddclientComponent } from "./addclient/addclient.component";
import { ClieneditComponent } from "./clienedit/clienedit.component";
import { ClientdetailsComponent } from "./clientdetails/clientdetails.component";
import { ClientlistComponent } from "./clientlist/clientlist.component";

const clientRoutes:Routes = [
    {
        path:'',
        component:ClientlistComponent
    },
    {
        path:'add', //client/add
        component:AddclientComponent
    },
    {
        path:'edit/:id',
        component:ClieneditComponent
    },
    {
        path:'details/:id',
        component:ClientdetailsComponent
    }
]

@NgModule({
    imports:[RouterModule.forChild(clientRoutes)],
    exports:[RouterModule]
})
export class ClientRoutingModule{

}