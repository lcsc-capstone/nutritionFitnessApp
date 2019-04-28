import { Component } from '@angular/core';
import { Validators,FormBuilder, FormControl } from '@angular/forms';
import { NutrientsValidator } from  './../../../../nutribien/src/app/validators/nutrients';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-Workout',
  templateUrl: 'Workout.page.html',
  styleUrls: ['Workout.page.scss']
})
export class WorkoutPage {
  public sport:string 
  public showDistance:boolean=false
  changeSport(){  
    //console.log(this.sport)
    if (this.sport=="Swimming" || this.sport=="Running" || this.sport=="Hiking"|| this.sport=="Biking"|| this.sport=="Walking"){
      this.showDistance=true
    }
  }
}
