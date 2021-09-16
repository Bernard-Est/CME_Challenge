import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeatComponent } from './seat.component';

const routes: Routes = [{ path: 'seats', component: SeatComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeatRoutingModule { }
