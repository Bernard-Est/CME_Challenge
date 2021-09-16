import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminReservationRoutingModule } from './admin-reservation-routing.module';
import { AdminReservationComponent } from './admin-reservation.component';
import { MaterialModule } from 'src/app/Core/material.module';


@NgModule({
  declarations: [
    AdminReservationComponent
  ],
  imports: [
    CommonModule,
    AdminReservationRoutingModule,
    MaterialModule
  ]
})
export class AdminReservationModule { }
