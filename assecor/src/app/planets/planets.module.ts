import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanetsRoutingModule } from './planets-routing.module';
import { PlanetsComponent } from './planets.component';
import { MatToolbarModule } from '@angular/material';


@NgModule({
  declarations: [PlanetsComponent],
  imports: [
    CommonModule,
    PlanetsRoutingModule,
    MatToolbarModule
  ]
})
export class PlanetsModule { }
