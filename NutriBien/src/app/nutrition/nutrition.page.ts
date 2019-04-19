import { Component } from '@angular/core';
import { Validators,FormBuilder, FormControl } from '@angular/forms';
import { NutrientsValidator } from  './../../../../nutribien/src/app/validators/nutrients';

/////        API STUFF       /////
import { ApiService } from '../api.service';

@Component({
  selector: 'app-nutrition',
  templateUrl: './nutrition.page.html',
  styleUrls: ['./nutrition.page.scss'],
})


export class NutritionPage{
   
  /*
  public ID_NUM: 575; 
  public Proteins: number;
  public Carbs: number;
  public Fats: number;
  public Fibers: number;
  public Calories: number;*/

  nutrition = this.formBuilder.group({
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

  constructor(private formBuilder: FormBuilder){

  }
  ngOnInit() {}
    
}
/*
export class Nutrients {
  ID_NUM: number;
  PROTEINS: number;
  CARBS: number;
  FATS: number;
  FIBERS: number;
  CALORIES: number;
}*/