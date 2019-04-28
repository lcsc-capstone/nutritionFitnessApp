import { Component } from '@angular/core';
import { Validators,FormBuilder, FormControl } from '@angular/forms';
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

  private _HOST : string 			=	"http://18.191.160.1701:5000/";
  private idnum : Number;

  //constructor(private formBuilder: FormBuilder, private _HTTP: HttpClient){}

  constructor(private formBuilder: FormBuilder, private _HTTP: HttpClient, private route: ActivatedRoute,private router: Router)
  {
     this.route.queryParams.subscribe(params => {this.idnum = params["idnum"];});
  }
  
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

  
  submit()
  {
    
    let  idnum  = 567,
    proteins    = this.nutrition.value.Proteins,
    carbs       = this.nutrition.value.Carbs,
    fats        = this.nutrition.value.Fats,
    fibers      = this.nutrition.value.Fibers,
    calories    = this.nutrition.value.Calories,
    date        = new Date(),
    headers     = new HttpHeaders({ 'Content-Type': 'application/json' }),
    options     = { idnum : idnum, proteins : proteins, carbs : carbs, fats : fats, fibers : fibers, calories : calories, date : date },
    url         = this._HOST + "api/nutriFit.nutrition";

    console.log(date);
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


// TESTING THE VARIABLE CONTAIN CORRECT VALUES (put in submit) 
    //console.log(this.nutrition.value.Proteins);
    //console.log(idnum);