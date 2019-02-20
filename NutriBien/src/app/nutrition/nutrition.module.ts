import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { NutritionPage } from './nutrition.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: NutritionPage }])
  ],
  declarations: [NutritionPage]
})


/*export class NutritionPageModule {}*/

export class NutritionPageModule {
  nutrition : FormGroup;
  
  constructor( private formBuilder: FormBuilder )
  { this.nutrition = new FormGroup(
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



