import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { NutritionPage } from './nutrition.page';

import { Http } from '@angular/http';
import { DatabaseProvider } from './../../../../NutriBien/src/app/database';

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
    console.log("garbage1");
    /*var proteins = (<HTMLInputElement>this.nutrition.getElementById("Proteins")).value;*/
    var proteins = value.Proteins;
    //var carbs = this.nutrition.Carbs;
    //var fats = this.Fats;
    //var fibers = ;
    //var calories = ;
    //$event.target.value
    //console.log(value.proteins);
    console.log(proteins);
    console.log(value.fats);
    console.log("garbage2");
    
  }

}



