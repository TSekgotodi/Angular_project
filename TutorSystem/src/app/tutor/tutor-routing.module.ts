import { TutorComponent } from './Components/tutor/tutor.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalDetailsComponent } from './Components/personal-details/personal-details.component';

const routes: Routes = [{
  path: '',
  component: TutorComponent,
  children: [
    {
      path: 'personal-details',
      component: PersonalDetailsComponent
    }
  ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class TutorRoutingModule { }
