import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminPlaysRoutingModule } from './admin-plays-routing.module';
import { AdminPlaysComponent } from './admin-plays.component';
import { MaterialModule } from 'src/app/Core/material.module';


@NgModule({
  declarations: [
    AdminPlaysComponent
  ],
  imports: [
    CommonModule,
    AdminPlaysRoutingModule,
    MaterialModule
  ]
})
export class AdminPlaysModule { }
