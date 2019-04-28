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

  private _HOST : string 			=	"http://18.191.160.170:5000/";
  constructor(private formBuilder: FormBuilder, private _HTTP: HttpClient){}

  public sport:string 
  public showDistance:boolean=false

  changeSport(){  
    //console.log(this.sport)
    if (this.sport=="Swimming" || this.sport=="Running" || this.sport=="Hiking"|| this.sport=="Biking"|| this.sport=="Walking"){
      this.showDistance=true
    }
  }

  Workout = this.formBuilder.group({
    Sport: new FormControl('Proteins', Validators.compose([
      Validators.required,
      NutrientsValidator.isValid
    ])),
    Distance: new FormControl('Carbs', Validators.compose([
      Validators.required,
      NutrientsValidator.isValid
    ])),
    Time: new FormControl('Fats', Validators.compose([
      Validators.required,
      NutrientsValidator.isValid
    ])),
    Calories: new FormControl('Fibers', Validators.compose([
      Validators.required,
      NutrientsValidator.isValid
    ]))
  });

  
  submit()
  {
    let  idnum  = 567,
    sport    = this.Workout.value.Sport,
    distance       = this.Workout.value.Distance,
    time        = this.Workout.value.Time,
    calories      = this.Workout.value.Calories,
    headers     = new HttpHeaders({ 'Content-Type': 'application/json' }),
    options     = { idnum : idnum, sport : sport, distance : distance, time : time, calories : calories },
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
