import { Component, OnInit, ViewChild, Inject, LOCALE_ID } from '@angular/core';
//import { CalendarComponent } from 'ionic2-calendar/calendar';
import { AlertController } from '@ionic/angular';
import { formatDate } from '@angular/common';
import { Router } from '@angular/router';



@Component({
  selector: 'app-nutrition-history',
  templateUrl: './nutrition-history.page.html',
  styleUrls: ['./nutrition-history.page.scss'],
})
export class NutritionHistoryPage implements OnInit {

  calendar = {
    mode: 'month',
    currentDate: new Date(),
  };

  viewTitle: any;

  constructor(private router: Router) { }

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
