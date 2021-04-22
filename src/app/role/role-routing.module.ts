import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddroleComponent } from './addrole/addrole.component';
import { EditroleComponent } from './editrole/editrole.component';
import { RoledetailsComponent } from './roledetails/roledetails.component';
import { RolelistComponent } from './rolelist/rolelist.component';
const roleRoutes: Routes = [
  {
    path: '',
    redirectTo: '/role/roleList',
    pathMatch: 'full',
  },
  {
    path: 'roleList',
    component: RolelistComponent,
  },
  {
    path: 'addrole',
    component: AddroleComponent,
  },
  {
    path: 'editrole/:id',
    component: EditroleComponent,
  },
  {
    path: 'roledetails/:id',
    component: RoledetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(roleRoutes)],
  exports: [],
})
export class RoleRoutingModule {}
