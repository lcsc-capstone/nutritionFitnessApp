import { Component } from '@angular/core';
import { Validators,FormBuilder, FormControl } from '@angular/forms';
import { MeasurementsValidator } from  './../../../../nutribien/src/app/validators/measurements';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { Router } from '@angular/router';
//import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
//import { DatabaseProvider } from '../database';
//import { Toast } from '@ionic-native/toast/ngx';
//import { NavController, MenuController } from '@ionic/angular'; 
//import { LoginPage } from '../login/login.page';

@Component({
  selector: 'app-Measurements',
  templateUrl: 'Measurements.page.html',
  styleUrls: ['Measurements.page.scss']
})

export class  MeasurementsPage {
  private _HOST : string       =  "http://0.0.0.0:8080/";

  constructor(private formBuilder: FormBuilder, private _HTTP: HttpClient){}

  Measurements = this.formBuilder.group({
    Neck: new FormControl('Neck', Validators.compose([
      Validators.required,
      MeasurementsValidator.isValid
    ])),
    Hip: new FormControl('Hip', Validators.compose([
      Validators.required,
      MeasurementsValidator.isValid
    ])),
    Thighs: new FormControl('Thighs', Validators.compose([
      Validators.required,
      MeasurementsValidator.isValid
    ])),
    Belly: new FormControl('Belly', Validators.compose([
      Validators.required,
      MeasurementsValidator.isValid
    ])),
    Bicep: new FormControl('Bicep', Validators.compose([
      Validators.required,
      MeasurementsValidator.isValid
    ]))
  });

  
  submit()
  {
    let  idnum  = 567,
    neck    = this.Measurements.value.Neck,
    hip       = this.Measurements.value.Hip,
    thighs        = this.Measurements.value.Thighs,
    belly      = this.Measurements.value.Belly,
    bicep    = this.Measurements.value.Bicep,
    headers     = new HttpHeaders({ 'Content-Type': 'application/json' }),
    options     = { idnum : idnum, neck : neck, hip : hip, thighs : thighs, belly : belly, bicep : bicep },
    url         = this._HOST + "api/nutriFit.Measurements";

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
/*
export class MenuExample {

constructor(private menu: MenuController) { }

  openFirst() 
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }
}
*/