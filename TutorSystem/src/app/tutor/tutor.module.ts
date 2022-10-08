import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalDetailsComponent } from './Components/personal-details/personal-details.component';

import { TutorRoutingModule } from './tutor-routing.module';
import { TutorComponent } from './Components/tutor/tutor.component';


@NgModule({
  declarations: [PersonalDetailsComponent, TutorComponent],
  imports: [
    CommonModule,
    TutorRoutingModule
  ]
})
export class TutorModule { }
