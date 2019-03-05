import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule, Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Http } from '@angular/http';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { DatabaseProvider } from './../../../../NutriBien/src/app/database';

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
    private formBuilder: FormBuilder,
    private sqlite: SQLite,
    public database: DatabaseProvider){}
    
    public Proteins: number;
    public Carbs: number;
    public Fats: number;
    public Fibers: number;
    public Calories: number;
    private querry: string = '';

  public submit(ngModel: any): void 
  {
    
    this.querry = 'INSERT INTO NUTRITION VALUES (NULL, ?, ?, ?, ?, ?)', [this.Proteins, this.Carbs, this.Fats, this.Fibers, this.Calories];
    this.database.createDbFile();
    this.database.executeSql(this.querry);

    // TESTING THE VARIABLE CONTAIN CORRECT VALUES 
    // console.log(this.Proteins);
    // console.log(this.Fibers); 
  }
    

  ngOnInit() {
  }

}
