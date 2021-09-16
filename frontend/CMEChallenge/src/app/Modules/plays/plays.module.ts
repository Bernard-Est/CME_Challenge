import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaysRoutingModule } from './plays-routing.module';
import { PlaysComponent } from './plays.component';
import { MaterialModule } from 'src/app/Core/material.module';


@NgModule({
  declarations: [
    PlaysComponent
  ],
  imports: [
    CommonModule,
    PlaysRoutingModule,
    MaterialModule
  ]
})
export class PlaysModule { }
