import { Component } from '@angular/core';

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
