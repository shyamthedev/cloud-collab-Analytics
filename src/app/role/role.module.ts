import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AddroleComponent } from './addrole/addrole.component';
import { EditroleComponent } from './editrole/editrole.component';
import { RoleRoutingModule } from './role-routing.module';
import { RoledetailsComponent } from './roledetails/roledetails.component';
import { RolelistComponent } from './rolelist/rolelist.component';

@NgModule({
  declarations: [
    AddroleComponent,
    EditroleComponent,
    RoledetailsComponent,
    RolelistComponent,
  ],
  imports: [
    CommonModule,
    RoleRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  exports: [],
  providers: [],
})
export class RoleModule {}
