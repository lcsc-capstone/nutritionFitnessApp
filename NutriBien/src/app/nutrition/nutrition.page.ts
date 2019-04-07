import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { NutrientsValidator } from  './../../../../nutribien/src/app/validators/nutrients';
import { db } from './../../app/database.js'

@Component({
  selector: 'app-nutrition',
  templateUrl: './nutrition.page.html',
  styleUrls: ['./nutrition.page.scss'],
})

export class NutritionPage{
   
  constructor(private formBuilder: FormBuilder){
    this.nutrition = this.formBuilder.group({
      Proteins: new FormControl('Proteins', Validators.compose([
        Validators.required,
        NutrientsValidator.isValid
      ])),
      Carbs: new FormControl('Carbs', Validators.compose([
        Validators.required,
        NutrientsValidator.isValid
      ])),
      Fats: new FormControl('Fats', Validators.compose([
        Validators.required,
        NutrientsValidator.isValid
      ])),
      Fibers: new FormControl('Fibers', Validators.compose([
        Validators.required,
        NutrientsValidator.isValid
      ])),
      Calories: new FormControl('Calories', Validators.compose([
        Validators.required,
        NutrientsValidator.isValid
      ]))
    });
  }
  public Proteins: number;
  public Carbs: number;
  public Fats: number;
  public Fibers: number;
  public Calories: number;
  private nutrition : FormGroup;

  public submit()
  {
    




    // TESTING THE VARIABLE CONTAIN CORRECT VALUES 
    // console.log(this.Proteins);
    // console.log(this.Fibers); 

  }
  ngOnInit() {}
    
}
