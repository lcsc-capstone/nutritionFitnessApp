import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public sport:string 
  public showDistance:boolean=false
  changeSport(){  
    //console.log(this.sport)
    if (this.sport=="Swimming" || this.sport=="Running" || this.sport=="Hiking"|| this.sport=="Biking"|| this.sport=="Walking"){
      this.showDistance=true
    }
  }
}
