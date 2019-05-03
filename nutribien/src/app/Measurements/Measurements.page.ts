import { Component } from '@angular/core';
import { Validators,FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { NutrientsValidator } from  './../../../../nutribien/src/app/validators/nutrients';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NavController, MenuController } from '@ionic/angular'; 
import { LoginPage } from '../login/login.page';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-Measurements',
  templateUrl: 'Measurements.page.html',
  styleUrls: ['Measurements.page.scss']
})

export class  MeasurementsPage {
  public measurementsForm: any;
  public USER_ID : any;
  public items : Array<any>;
  private _HOST : string       =  "http://18.191.160.170:5000/"; //for actual server
  //private _HOST : string       =  "http://127.0.0.1:5000/";  //for testing in simulator 

  public idnum : any;

  constructor(  public formBuilder: FormBuilder, private _HTTP: HttpClient,private router: Router, private storage: Storage){

  this.measurementsForm = this.formBuilder.group({
    Neck: new FormControl('Neck', Validators.compose([
      Validators.required,
      NutrientsValidator.isValid
    ])),
    Hip: new FormControl('Hip', Validators.compose([
      Validators.required,
      NutrientsValidator.isValid
    ])),
    Thigh: new FormControl('Thigh', Validators.compose([
      Validators.required,
      NutrientsValidator.isValid
    ])),
    Belly: new FormControl('Belly', Validators.compose([
      Validators.required,
      NutrientsValidator.isValid
    ])),
    Bicep: new FormControl('Bicep', Validators.compose([
      Validators.required,
      NutrientsValidator.isValid
    ]))
  });
  }




ionViewDidEnter() : void
{
  this.retrieve();
      
}
//for loop 
//look up list for ionic 

    //navExtras for muser?
    //['/measurements'] for ['/muser']?
    //Can I just retrieve info on the html muser page?
    
  

  retrieve() : void
   {
      this._HTTP
      .get(this._HOST + "api/nutriFit.measurements")
      .subscribe((data : any) =>
      {
         this.items = data.records;
         
      },
      (error : any) =>
      {
         console.dir(error);
      });
   }

  

  
  submit()
  {
    this.storage.get("idnum").then((data)=>{
      this.idnum = data;
      
    });
    console.log(this.idnum);
    let idnum   = this.idnum,
    neck        = this.measurementsForm.value.Neck,
    hip         = this.measurementsForm.value.Hip,
    thigh       = this.measurementsForm.value.Thigh,
    belly       = this.measurementsForm.value.Belly,
    bicep       = this.measurementsForm.value.Bicep,
    date        = new Date(),
    headers     = new HttpHeaders({ 'Content-Type': 'application/json' }),
    options     = { idnum : idnum, neck : neck, hip : hip, thigh : thigh, belly : belly, bicep : bicep, date : date },
    url         = this._HOST + "api/nutriFit.measurements";

    console.log(idnum);
    console.log(neck);
    console.log(hip);
    console.log(thigh);
    console.log(belly);
    console.log(bicep);
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

