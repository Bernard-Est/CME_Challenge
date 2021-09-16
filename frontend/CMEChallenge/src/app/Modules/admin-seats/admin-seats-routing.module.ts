import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminSeatsComponent } from './admin-seats.component';

const routes: Routes = [{ path: '', component: AdminSeatsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminSeatsRoutingModule { }
