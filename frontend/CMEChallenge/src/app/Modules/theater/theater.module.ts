import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TheaterRoutingModule } from './theater-routing.module';
import { TheaterComponent } from './theater.component';
import { MaterialModule } from 'src/app/Core/material.module';


@NgModule({
  declarations: [
    TheaterComponent
  ],
  imports: [
    CommonModule,
    TheaterRoutingModule,
    MaterialModule
  ]
})
export class TheaterModule { }
