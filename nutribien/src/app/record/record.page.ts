import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { ToastController } from '@ionic/angular';
import { ChartsModule} from 'ng2-charts';


@Component({
  selector: 'app-record',
  templateUrl: './record.page.html',
  styleUrls: ['./record.page.scss'],
})
export class RecordPage implements OnInit {

  private _HOST : string 			=	"http://18.191.160.170:5000/";
  public items : Array<any>;
  public idnum: any;
  public sport : any[] = [];
  public distance : any[] = [];
  public time : any[] = [];
  public calories: Array<any>;

  public date : Array<any>;
  public success: boolean = false;


  ///////////////


  public lineChartData:Array<any> = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
  ];
  public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  
  public lineChartOptions:any = {
    responsive: true
  };
  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
    /*{ // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }*/
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';
  
  /*
  public randomize():void {
    console.dir(this.lineChartData);
    let _lineChartData:Array<any> = new Array(this.lineChartData.length);
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
      }
    }
    this.lineChartData = _lineChartData;
  }
  */
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
  
  public chartHovered(e:any):void {
    console.log(e);
  }


/////////////

return(){
  this.router.navigate(['/workout']);
 }





/////////////////////////////////////////////YUKA////////////////////////////////////



  constructor(    private router: Router,
    private _HTTP: HttpClient,
    private _TOAST: ToastController,
    private storage: Storage) {
      this.storage.get("idnum").then((id)=>{
        this.idnum = id;
      });
     }

  
  ionViewDidEnter() : void
  {
    this.retrieve();
  }



  displayNotification(message : string) : void
  {
     let toast = this._TOAST.create({
        message 	: message,
        duration 	: 3000
     }).then((toastData)=>{
       toastData.present();
     });
  }

  retrieve() : void
  {
     this._HTTP
     .get(this._HOST + "api/nutriFit.workout")
     .subscribe((data : any) =>
     {
        // If the request was successful notify the user
        this.items = data.records;

        for(let i=0; i<this.items.length; i++){
          if(this.idnum == this.items[i].ID_NUM){
            this.sport.push(this.items[i].SPORT);
            
            if (this.items[i].DISTANCE == null){
              this.distance.push("null");
            }else{
              this.distance.push(this.items[i].DISTANCE);
            }
            this.time.push(this.items[i].TIME);
            
            this.date = this.items[i].DATE;
            console.dir(this.date);
            this.calories = this.items[i].CALORIES;
  
            this.success = true;
          }
        }
        if(!this.success){
          this.displayNotification('No Records');
        }
        
     },
     (error : any) =>
     {
        console.dir(error);
     });
  }

  ngOnInit() {
  }

}
