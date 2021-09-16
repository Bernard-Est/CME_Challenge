import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminReservationComponent } from './admin-reservation.component';

const routes: Routes = [{ path: '', component: AdminReservationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminReservationRoutingModule { }
