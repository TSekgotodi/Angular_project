import { TutorComponent } from './Components/tutor/tutor.component';
import { NgModule } from '@angular/core';
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
  exports: [RouterModule]
})
export class TutorRoutingModule { }
