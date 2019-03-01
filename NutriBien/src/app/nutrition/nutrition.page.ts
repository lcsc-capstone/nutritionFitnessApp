import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule, Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Http } from '@angular/http';
import { DatabaseProvider } from './../../../../NutriBien/src/app/database';

@Component({
  selector: 'app-nutrition',
  templateUrl: './nutrition.page.html',
  styleUrls: ['./nutrition.page.scss'],
})

@NgModule({
  imports: [
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: [NutritionPage]
})

export class NutritionPage implements OnInit {

  
  public Proteins; 
  public Carbs; 
  public Fats; 
  public Fibers; 
  public Calories; 


  constructor( private formBuilder: FormBuilder )
  {
  }
  public logForm(){
    console.log("See? I WORK!")
  }

  public submit(ngModel: any): void 
  {
    var proteins = this.Proteins;
    var carbs = this.Carbs;
    var fats = this.Fats;
    var fibers = this.Fibers;
    var calories = this.Calories;
  
    //TESTING THE VARIABLE CONTAIN CORRECT VALUES 
    /*console.log(proteins);
    console.log(fibers); */
  }

  ngOnInit() {
  }

}
