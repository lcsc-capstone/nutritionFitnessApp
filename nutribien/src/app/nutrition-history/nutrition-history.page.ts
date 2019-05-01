import { Component, OnInit, ViewChild, Inject, LOCALE_ID } from '@angular/core';
import { CalendarComponent } from 'ionic2-calendar/calendar';
import { AlertController } from '@ionic/angular';
import { formatDate } from '@angular/common';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';




@Component({
  selector: 'app-nutrition-history',
  templateUrl: './nutrition-history.page.html',
  styleUrls: ['./nutrition-history.page.scss'],
})
export class NutritionHistoryPage implements OnInit {

  constructor(private router: Router, private storage: Storage){}

  viewTitle: any;
  private idnum: any;

  ionViewDidEnter(){
    this.storage.get("idnum").then((data)=>{
      this.idnum = data;
      console.log(this.idnum);
    });

    this.storage.forEach( (value, key, index) => {
      console.log("This is the value", value)
      console.log("from the key", key)
      console.log("Index is", index)
    })
  }

  calendar = {
    mode: 'month',
    currentDate: new Date(),
  };

  docSource = []
  // will have to put in a loop for all document under that id num currently in storage
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

addDocument()
{
  let docCopy = 
  {
    proteins: this.document.proteins,
    carbs:this.document.carbs,
    fats:this.document.fats,
    fibers:this.document.fibers,
    sugars:this.document.sugars,
    calories:this.document.calories,
    startTime:this.document.startTime,
    endTime:this.document.endTime
  }
}

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
