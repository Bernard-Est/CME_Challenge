import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu.component';

const routes: Routes = [
  { path: '', component: MenuComponent },
  { path: 'adminTheater', loadChildren: () => import('../admin-theater/admin-theater.module').then(m => m.AdminTheaterModule) },
  { path: 'adminPlays', loadChildren: () => import('../admin-plays/admin-plays.module').then(m => m.AdminPlaysModule) },
  { path: 'adminSeats', loadChildren: () => import('../admin-seats/admin-seats.module').then(m => m.AdminSeatsModule) },
  { path: 'adminReservation', loadChildren: () => import('../admin-reservation/admin-reservation.module').then(m => m.AdminReservationModule) },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
