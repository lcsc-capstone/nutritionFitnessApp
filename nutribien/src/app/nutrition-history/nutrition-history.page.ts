import { Component, OnInit, ViewChild, Inject, LOCALE_ID } from '@angular/core';
import { CalendarComponent } from 'ionic2-calendar/calendar';
import { AlertController } from '@ionic/angular';
import { formatDate } from '@angular/common';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Document } from './documents'



@Component({
  selector: 'app-nutrition-history',
  templateUrl: './nutrition-history.page.html',
  styleUrls: ['./nutrition-history.page.scss'],
})


export class NutritionHistoryPage implements OnInit {

  @ViewChild(CalendarComponent) myCal: CalendarComponent;

  constructor(private router: Router, private storage: Storage, private _HTTP: HttpClient, private alertCtrl: AlertController, @Inject(LOCALE_ID) private locale: string){}

  private _HOST : string       =  "http://18.191.160.170:5000/"; //for actual server
  //private _HOST : string       =  "http://127.0.0.1:5000/";  //for testing in simulator 
  eventSource = [];
  viewTitle: any;
  private idnum: any;
  docs: Array<Document> = [];

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
         console.log(this.idnum);
         if(entry.ID_NUM == this.idnum)
         {
           console.log(entry);
           let doc = new Document(entry.PROTEINS,entry.CARBS,entry.FATS,entry.FIBERS,entry.SUGARS,entry.CALORIES,entry.DATE);
           this.docSource.push(doc);
         }
       }

       for(let item of this.docSource){
        let eventCopy = {
          title: "Nutrition",
          proteins: item.proteins,
          carbs: item.carbs,
          fats: item.fats,
          fibers: item.fibers,
          sugars: item.sugars,
          calories: item.proteins,
          startTime: new Date(item.date),
          endTime: new Date(item.date),
          allDay: false
        }
        this.eventSource.push(eventCopy);
        console.log(eventCopy);
        this.myCal.loadEvents();
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
  


  async onEventSelected(event){

    // Use Angular date pipe for conversion
    let start = formatDate(event.startTime, 'medium', this.locale);
    let end = formatDate(event.endTime, 'medium', this.locale);
  
    const alert = await this.alertCtrl.create({
      header: event.title,
      subHeader: "Your nutrition intake was",
      message: 'From: ' + start + '<br><br>To: ' + end,
      buttons: ['OK']
    });
    alert.present();

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
