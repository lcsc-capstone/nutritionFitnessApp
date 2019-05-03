import { Component, OnInit, ViewChild, Inject, LOCALE_ID } from '@angular/core';
import { CalendarComponent } from 'ionic2-calendar/calendar';
import { AlertController } from '@ionic/angular';
import { formatDate } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Component({
  selector: 'app-nutrition-history',
  templateUrl: './nutrition-history.page.html',
  styleUrls: ['./nutrition-history.page.scss'],
})
export class NutritionHistoryPage implements OnInit {

  constructor(private router: Router, private storage: Storage, private _HTTP: HttpClient){}

  private _HOST : string       =  "http://18.191.160.170:5000/"; //for actual server
  //private _HOST : string       =  "http://127.0.0.1:5000/";  //for testing in simulator 
  viewTitle: any;
  private idnum: any;

  proteins: any;


  document = {
    proteins:'',
    carbs:'',
    fats:'',
    fibers:'',
    sugars:'',
    calories:'',
    startTime:'',
    endTime:'',
    allday: false
  }

  ionViewDidEnter(){
    this.storage.get("idnum").then((data)=>{
      this.idnum = data;
      console.log(this.idnum);
    });
    /*
    this.storage.forEach( (value, key, index) => {
      console.log("This is the value", value)
      console.log("from the key", key)
      console.log("Index is", index)
    })
    */

   let headers     = new HttpHeaders({ 'Content-Type': 'application/json' }),
       url         = this._HOST + "api/nutriFit.nutrition";

   this._HTTP
    .get(url,{headers: headers})
    .subscribe((data : any) =>
    {
       // If the request was successful print all the docs
       //console.log(data);
       for(let entry of data.records)
       {
         if(entry.ID_NUM == this.idnum)
         {
           console.log(entry);
         }
       }
    },
    (error : any) =>
    {
       console.dir(error);
    });
  }

  calendar = {
    mode: 'month',
    currentDate: new Date(),
  };

  docSource = []
  // will have to put in a loop for all document under that id num currently in storage
  


  onEventSelected(){

  }

  return(){
    this.router.navigate(['/nutrition']);
   }



  // Change current month/week/day
 next() {
  var swiper = document.querySelector('.swiper-container')['swiper'];
  swiper.slideNext();
}
 
back() {
  var swiper = document.querySelector('.swiper-container')['swiper'];
  swiper.slidePrev();
}
 
// Change between month/week/day
changeMode(mode: string) {
  this.calendar.mode = mode;
}
 
// Focus today
today() {
  this.calendar.currentDate = new Date();
}
 
// Selected date range and hence title changed
onViewTitleChanged(title: any) {
  this.viewTitle = title;
}
 
 
// Time slot was clicked
onDateSelected(ev) {
 //print records.
}


  ngOnInit() {
  }

}
