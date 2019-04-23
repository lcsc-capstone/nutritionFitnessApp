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

  constructor(private formBuilder: FormBuilder, public api: ApiService){}
  async submit()
  {
<<<<<<< HEAD
    let  idnum  = 567,
    proteins    = this.nutrition.value.Proteins,
    carbs       = this.nutrition.value.Carbs,
    fats        = this.nutrition.value.Fats,
    fibers      = this.nutrition.value.Fibers,
    calories    = this.nutrition.value.Calories,
    headers     = new HttpHeaders({ 'Content-Type': 'application/json' }),
    options     = { idnum : idnum, proteins : proteins, carbs : carbs, fats : fats, fibers : fibers, calories : calories },
    url         = this._HOST + "api/nutriFit.nutrition";
=======
    // TESTING THE VARIABLE CONTAIN CORRECT VALUES 
    // console.log(this.Fibers); 
>>>>>>> parent of 083995b... connect and push to mongo

    await this.api.addEntry(NutritionPage);

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