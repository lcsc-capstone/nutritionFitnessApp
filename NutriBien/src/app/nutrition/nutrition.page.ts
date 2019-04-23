import { Component } from '@angular/core';
import { Validators,FormBuilder, FormControl } from '@angular/forms';
import { NutrientsValidator } from  './../../../../nutribien/src/app/validators/nutrients';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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

  private _HOST : string 			=	"http://127.0.0.1:8080/";

  constructor(private formBuilder: FormBuilder, private _HTTP: HttpClient){}

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
  submit(){
  
    let  idnum  = 567,
    proteins    = this.nutrition.value.Proteins,
    carbs       = this.nutrition.value.Carbs,
    fats        = this.nutrition.value.Fats,
    fibers      = this.nutrition.value.Fibers,
    calories    = this.nutrition.value.Calories,
    headers     = new HttpHeaders({ 'Content-Type': 'application/json' }),
    options     = { idnum : idnum, proteins : proteins, carbs : carbs, fats : fats, fibers : fibers, calories : calories },
    url         = this._HOST + "api/nutriFit.nutrition";

    this._HTTP
    .post(url, options, {headers: headers}) //different from tutorial so error goes away
    .subscribe((data : any) =>
    {
       // If the request was successful clear the form of data
       // and notify the user
       console.log('New entry was successfully created');
    },
    (error : any) =>
    {
       console.dir(error);
    });
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