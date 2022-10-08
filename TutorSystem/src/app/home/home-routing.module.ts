import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TutorModule } from '../tutor/tutor.module';
import { PersonalDetailsComponent } from '../tutor/Components/personal-details/personal-details.component';

const routes: Routes = [
  {
  path: '',
  component: HomeComponent
},
{
  path: 'personal-details',
   component: PersonalDetailsComponent
  // loadChildren: () => import('../tutor/tutor.module').then(m=>m.TutorModule)
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
