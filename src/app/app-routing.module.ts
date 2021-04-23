import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/auth/login',
    pathMatch: 'full',
  },
  
  {
    path: 'client', 
    loadChildren: () =>
      import('./client/client.module').then((m) => m.ClientModule),
  },
  {
    path:'role',
    loadChildren:()=> 
      import('./role/role.module').then((m)=> m.RoleModule)
       
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
