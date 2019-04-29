import { Component } from '@angular/core';
import { Validators,FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { NutrientsValidator } from  './../../../../nutribien/src/app/validators/nutrients';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from "@angular/router";
import { Router } from '@angular/router';

@Component({
  selector: 'app-nutrition',
  templateUrl: './nutrition.page.html',
  styleUrls: ['./nutrition.page.scss'],
})


export class NutritionPage{

  private _HOST : string       =  "http://18.191.160.170:5000/"; //for actual server
  //private _HOST : string       =  "http://127.0.0.1:5000/";  //for testing in simulator 
  
  private idnum : Number;
  private nutritionForm : FormGroup;

  //constructor(private formBuilder: FormBuilder, private _HTTP: HttpClient){}
  validation_messages = {
    'number': [
        { type: 'required', message: 'This field is required.' },
        { type: 'negative', message: 'Sorry, not negative numbers allowed.' },
        { type: 'notNum', message: 'This field is required.' },
        { type: 'realistic', message: 'This seems to be too big of a number' }
      ]
    }

  constructor(public formBuilder: FormBuilder, private _HTTP: HttpClient, private route: ActivatedRoute,private router: Router)
  {
     //this.route.queryParams.subscribe(params => {this.idnum = params["idnum"];}); didn't work
     this.nutritionForm = this.formBuilder.group({
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
      Sugars: new FormControl('Sugars', Validators.compose([
        Validators.required,
        NutrientsValidator.isValid
      ])),
      Calories: new FormControl('Calories', Validators.compose([
        Validators.required,
        NutrientsValidator.isValid
      ]))
    });
  }
  
  submit()
  {
    
    let  idnum  = 567,
    proteins    = this.nutritionForm.value.Proteins,
    carbs       = this.nutritionForm.value.Carbs,
    fats        = this.nutritionForm.value.Fats,
    fibers      = this.nutritionForm.value.Fibers,
    sugars      = this.nutritionForm.value.Sugars,
    calories    = this.nutritionForm.value.Calories,
    date        = new Date(),
    headers     = new HttpHeaders({ 'Content-Type': 'application/json' }),
    options     = { idnum : idnum, proteins : proteins, carbs : carbs, fats : fats, fibers : fibers, sugars : sugars, calories : calories, date : date },
    url         = this._HOST + "api/nutriFit.nutrition";

    console.log(date);
    this._HTTP
         .post(url, options, {headers: headers}) //different from tutorial so error goes away
         .subscribe((data : any) =>
         {
            // If the request was successful clear the form of data
            // and notify the user
            console.log(this.idnum);
            console.log('New entry was successfully created');
         },
         (error : any) =>
         {
            console.dir(error);
         });

    
  }
  ngOnInit() {}

  viewHistory()
  {
    this.router.navigate(['nutrition-history']);
  }
    
}


// TESTING THE VARIABLE CONTAIN CORRECT VALUES (put in submit) 
    //console.log(this.nutrition.value.Proteins);
    //console.log(idnum);