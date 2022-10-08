import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';


const MaterialComponents = [
  MatCardModule,
  MatStepperModule,
  MatTabsModule,
  MatFormFieldModule
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
