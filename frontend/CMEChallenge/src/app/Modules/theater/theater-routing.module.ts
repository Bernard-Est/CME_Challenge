import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TheaterComponent } from './theater.component';

const routes: Routes = [
  { path: '', component: TheaterComponent },
  { path: 'seat', loadChildren: () => import('../seat/seat.module').then(m => m.SeatModule) },
  { path: 'plays', loadChildren: () => import('../plays/plays.module').then(m => m.PlaysModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TheaterRoutingModule { }
