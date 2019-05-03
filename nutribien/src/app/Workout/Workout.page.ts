import { Component } from '@angular/core';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { WorkoutValidator } from  './../../../../nutribien/src/app/validators/workout';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-Workout',
  templateUrl: 'Workout.page.html',
  styleUrls: ['Workout.page.scss']
})
export class WorkoutPage {

  public sport:string;
  public showDistance:boolean=false;
  public WorkoutForm: any;
  public idnum : any;

  changeSport()
  {  
    //console.log(this.sport)
    if (this.sport=="Swimming" || this.sport=="Running" || this.sport=="Hiking"|| this.sport=="Biking"|| this.sport=="Walking"){
      this.showDistance=true
    }
  }
  


  private _HOST : string       =  "http://18.191.160.170:5000/"; //for actual server
  //private _HOST : string       =  "http://127.0.0.1:5000/";  //for testing in simulator 
  
  validation_messages = {
    'number': [
        { type: 'required', message: 'This field is required.' },
        { type: 'negative', message: 'Sorry, not negative numbers allowed.' },
        { type: 'notNum', message: 'This field is required.' },
        { type: 'realistic', message: 'This seems to be too big of a number' }
      ]
    }

  constructor(private storage: Storage, public formBuilder: FormBuilder, private _HTTP: HttpClient){
    this.WorkoutForm = this.formBuilder.group({
      Sport: new FormControl('', Validators.compose([
        Validators.required
      ])),
      Distance: new FormControl('', Validators.compose([
        Validators.required,
        WorkoutValidator.isValid
      ])),
      Time: new FormControl('', Validators.compose([
        Validators.required,
        WorkoutValidator.isValid
      ])),
      Calories: new FormControl('', Validators.compose([
        Validators.required,
        WorkoutValidator.isTooBig
      ]))
    });
  }
  

  submit()
  {
    this.storage.get("idnum").then((data)=>{
      this.idnum = data;
      console.log(this.idnum);
    });
    let idnum       = this.idnum,
    sport       = this.WorkoutForm.value.Sport,
    distance    = this.WorkoutForm.value.Distance,
    time        = this.WorkoutForm.value.Time,
    calories    = this.WorkoutForm.value.Calories,
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
