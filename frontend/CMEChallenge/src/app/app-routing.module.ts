import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./Modules/login/login.module').then(m => m.LoginModule) }, 
  { path: 'Main', loadChildren: () => import('./Modules/home/home.module').then(m => m.HomeModule) },
  { path: 'menu', loadChildren: () => import('./Modules/menu/menu.module').then(m => m.MenuModule) },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
