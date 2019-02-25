import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { NutritionPage } from './nutrition.page';

import { Http } from '@angular/http';
import { DatabaseProvider } from '/Users/chelseamessan/Desktop/nutritionFitnessApp/NutriBien/src/app/database';

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
  
  submit(value: any): void 
  {
    var proteins = (<HTMLInputElement>document.getElementById("Proteins")).value;
    var carbs = (<HTMLInputElement>document.getElementById("Carbs")).value;
    var fats = (<HTMLInputElement>document.getElementById("Fats")).value;
    var fibers = (<HTMLInputElement>document.getElementById("Fibers")).value;
    var calories = (<HTMLInputElement>document.getElementById("Calories")).value;

    console.log(value.proteins);
    console.log(value.carbs);
    console.log(value.fats);
  }

}



