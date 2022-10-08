import { HomeModule } from './home/home.module';
import { HomeComponent } from './home/home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TutorModule } from './tutor/tutor.module';
import { PersonalDetailsComponent } from './tutor/Components/personal-details/personal-details.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent},

  //  loadChildren: () => import('./home/home/home.component').then(m=>m.HomeModule)
  {
    path: 'personal',
    component: PersonalDetailsComponent
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
