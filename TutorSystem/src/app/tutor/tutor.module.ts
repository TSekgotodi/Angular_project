import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalDetailsComponent } from './Components/personal-details/personal-details.component';
import { MaterialModule } from '../material/material.module';

import { TutorRoutingModule } from './tutor-routing.module';
import { TutorComponent } from './Components/tutor/tutor.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';


@NgModule({
  declarations: [PersonalDetailsComponent, TutorComponent, DashboardComponent],
  imports: [
    CommonModule,
    TutorRoutingModule,
    MaterialModule
  ]
})
export class TutorModule { }
