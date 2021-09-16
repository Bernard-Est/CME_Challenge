import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaysComponent } from './plays.component';

const routes: Routes = [
  { path: 'plays', component: PlaysComponent },
  { path: 'seats', loadChildren: () => import('../seat/seat.module').then(m => m.SeatModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlaysRoutingModule { }
