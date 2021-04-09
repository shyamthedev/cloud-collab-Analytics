import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ClientlistComponent } from './clientlist/clientlist.component';
import { ClieneditComponent } from './clienedit/clienedit.component';
import { AddclientComponent } from './addclient/addclient.component';
import { ClientRoutingModule } from './client-routing.module';
import { ClientdetailsComponent } from './clientdetails/clientdetails.component';

@NgModule({
  declarations: [ClientlistComponent, ClieneditComponent, AddclientComponent, ClientdetailsComponent],
  imports: [CommonModule, ClientRoutingModule],
  providers: [],
  exports: [],
})
export class ClientModule {}
