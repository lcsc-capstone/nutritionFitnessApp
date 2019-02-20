import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NutritionPage } from './nutrition.page';

const routes: Routes = [
  {
    path: '',
    component: NutritionPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NutritionPage]
})
export class NutritionPageModule {
  private nutrition : FormGroup;
  
  constructor( private formBuilder: FormBuilder )
  { this.nutrition = this.formBuilder.group(
    {
      Proteins: new FormControl('Proteins', Validators.required),
      Carbs: new FormControl('Carbs', Validators.required),
      Fats: new FormControl('Fats', Validators.required),
      Fibers: new FormControl('Fibers', Validators.required),
      Calories: new FormControl('Calories', Validators.required)
    });
  }
  
  private submit()
  {}
}


