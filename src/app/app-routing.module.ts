import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapsComponent } from './views/maps/maps.component';
import { ProfileComponent } from './views/profile/profile.component';

const routes: Routes = [
    {path : 'map',component:MapsComponent },
    {path : 'profile', component:ProfileComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
