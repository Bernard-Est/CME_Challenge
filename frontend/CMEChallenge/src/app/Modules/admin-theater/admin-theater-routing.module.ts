import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminTheaterComponent } from './admin-theater.component';

const routes: Routes = [{ path: '', component: AdminTheaterComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminTheaterRoutingModule { }
