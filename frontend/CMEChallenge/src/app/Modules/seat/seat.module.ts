import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeatRoutingModule } from './seat-routing.module';
import { SeatComponent } from './seat.component';
import { ColorPipe } from './color.pipe';


@NgModule({
  declarations: [
    SeatComponent,
    ColorPipe
  ],
  imports: [
    CommonModule,
    SeatRoutingModule
  ]
})
export class SeatModule { }
