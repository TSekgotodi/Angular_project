import { HomeModule } from './home/home.module';
import { HomeComponent } from './home/home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TutorModule } from './tutor/tutor.module';
import { PersonalDetailsComponent } from './tutor/Components/personal-details/personal-details.component';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo:'/home',
  //   pathMatch:'full'
  
  // },
  {
      path: 'home',
       loadChildren: () => import('./home/home.module').then(m=>m.HomeModule)
    },

 
  {
    path: 'personal-details',
    // component: PersonalDetailsComponent
    loadChildren: () => import('./tutor/tutor.module').then(m=>m.TutorModule)
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
