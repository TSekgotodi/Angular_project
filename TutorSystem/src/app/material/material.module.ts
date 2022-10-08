import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';


const MaterialComponents = [
  MatCardModule,
  MatStepperModule,
  MatTabsModule,
  MatFormFieldModule,
  MatSelectModule
];
@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    MaterialComponents,
  ],
  exports: [
    MaterialComponents
  ],
})
export class MaterialModule { }
