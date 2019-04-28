import { Component } from '@angular/core';
import { Validators, FormBuilder, FormControl } from '@angular/forms';
import { NutrientsValidator } from  './../../../../nutribien/src/app/validators/nutrients';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-Workout',
  templateUrl: 'Workout.page.html',
  styleUrls: ['Workout.page.scss']
})
export class WorkoutPage {

  private _HOST : string       =  "http://18.191.160.1701:5000/"; //for actual server
  //private _HOST : string       =  "http://127.0.0.1:5000/";  //for testing in simulator 
  
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
    Sport: new FormControl('Sport', Validators.compose([
      Validators.required,
      NutrientsValidator.isValid
    ])),
    Distance: new FormControl('Distance', Validators.compose([
      Validators.required,
      NutrientsValidator.isValid
    ])),
    Time: new FormControl('Time', Validators.compose([
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
    sport       = this.Workout.value.Sport,
    distance    = this.Workout.value.Distance,
    time        = this.Workout.value.Time,
    calories    = this.Workout.value.Calories,
    date        = new Date(),
    headers     = new HttpHeaders({ 'Content-Type': 'application/json' }),
    options     = { idnum : idnum, sport : sport, distance : distance, time : time, calories : calories, date: date },
    url         = this._HOST + "api/nutriFit.workout";


    console.log(sport);
    console.log(distance);
    console.log(time);
    console.log(calories);

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
