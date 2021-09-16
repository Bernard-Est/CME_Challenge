import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPlaysComponent } from './admin-plays.component';

const routes: Routes = [
  { path: '', component: AdminPlaysComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminPlaysRoutingModule { }
