import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminTheaterRoutingModule } from './admin-theater-routing.module';
import { AdminTheaterComponent } from './admin-theater.component';
import { MaterialModule } from 'src/app/Core/material.module';


@NgModule({
  declarations: [
    AdminTheaterComponent
  ],
  imports: [
    CommonModule,
    AdminTheaterRoutingModule,
    MaterialModule
  ]
})
export class AdminTheaterModule { }
