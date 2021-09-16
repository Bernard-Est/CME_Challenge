import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminSeatsRoutingModule } from './admin-seats-routing.module';
import { AdminSeatsComponent } from './admin-seats.component';
import { MaterialModule } from 'src/app/Core/material.module';


@NgModule({
  declarations: [
    AdminSeatsComponent
  ],
  imports: [
    CommonModule,
    AdminSeatsRoutingModule,
    MaterialModule
  ]
})
export class AdminSeatsModule { }
