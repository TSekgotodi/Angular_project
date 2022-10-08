import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TutorModule } from '../tutor/tutor.module';

const routes: Routes = [
  {
  path: 'home',
  component: HomeComponent
},
  {
  path: 'tutor',
  loadChildren: ()=> import('../tutor/tutor.module').then(m=> m.TutorModule)
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
