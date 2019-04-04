import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { NutrientsValidator } from  './../../../../nutribien/src/app/validators/nutrients';
import * as mongoose from 'mongoose';



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
    //const MongoClient = require('mongodb').MongoClient;
    const uri = "mongodb+srv://nutri:<bien>@nutrition-fitness-app-dsodq.gcp.mongodb.net/admin?retryWrites=true";
    
    const client = mongoose.createConnection(uri);
    client.on("error", function(err)
    {
      console.log("connection error:", err);
    });

  }
  ngOnInit() {}
    
}
