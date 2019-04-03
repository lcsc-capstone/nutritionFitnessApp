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
   
  constructor(private formBuilder: FormBuilder)
    {
      this.nutrition = this.formBuilder.group(
      {
        //ADD PROMT TEXT FOR ALL VALIDATORS//
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
    client.on("error", function(err){
      console.log("connection error:", err);
  });
    // client.connect(async(_err: any) => {
    //   if (_err) {
    //     console.error(_err)
    //     return
    //   }
    //   const nutri = client.db("nutritionFitnessApp");
    //   console.log("connected to Mongo, whohoo!");
    //   // perform actions on the collection object
    //   await nutri.collection('NUTRITION').insertMany([
    //     {PROTEINS: this.Proteins},
    //     {CARBS: this.Carbs},
    //     {FIBERS: this.Fibers},
    //     {FATS: this.Fats},
    //     {CALORIES: this.Calories}
    //   ]);
    //   client.close();
    // });
    
    // TESTING THE VARIABLE CONTAIN CORRECT VALUES 
    // console.log(this.Proteins);
    // console.log(this.Fibers); 
  }
  
  ngOnInit() {}
    
}

