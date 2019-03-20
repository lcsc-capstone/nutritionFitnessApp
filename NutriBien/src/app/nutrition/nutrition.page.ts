import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule, Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import '../database.js';
import { NutrientsValidator } from  './../../../../NutriBien/src/app/validators/nutrients';
//import { AppModule} from './../../../../NutriBien/src/app/app.module';

//declare var require: any


@Component({
  selector: 'app-nutrition',
  templateUrl: './nutrition.page.html',
  styleUrls: ['./nutrition.page.scss'],
})

@NgModule({
  imports:[
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: [NutritionPage]
})

export class NutritionPage implements OnInit {


  
  constructor(
    private formBuilder: FormBuilder
  )
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
    
  


  public submit(ngModel: any): void 
  {
    /* USING SQLITE STORAGE
    this.querry = 'INSERT INTO NUTRITION VALUES (NULL, ?, ?, ?, ?, ?)', [this.Proteins, this.Carbs, this.Fats, this.Fibers, this.Calories];
    this.database.createDbFile();
    this.database.createTables();
    this.database.executeSql(this.querry);*/

    const MongoClient = require('mongodb').MongoClient;
    const uri = "mongodb+srv://nutri:<password>@nutrition-fitness-app-dsodq.gcp.mongodb.net/test?retryWrites=true";
    const client = new MongoClient(uri, { useNewUrlParser: true });
    client.connect((_err: any) => {
      const collection = client.db("nutritionFitnessApp").collection("NUTRITION");
      // perform actions on the collection object
      client.close();
    });
    
    client.connect(async (_err: any) => {
      const collection = client.db("test").collection("devices");
      // perform actions on the collection object
      await client.db.collection('NUTRITION').insertOne({
        PROTEINS: this.Proteins,
        CARBS: this.Carbs,
        FATS: this.Fats,
        FIBERS: this.Fibers,
        CALORIES: this.Calories
      });
      client.close();
    })

    // TESTING THE VARIABLE CONTAIN CORRECT VALUES 
    // console.log(this.Proteins);
    // console.log(this.Fibers); 
  }
    
  
  ngOnInit() {
  }

}
