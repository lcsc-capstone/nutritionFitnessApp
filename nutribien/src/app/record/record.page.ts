import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { ToastController } from '@ionic/angular';


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
  public calories : any[] = [];
  public date : any[] = [];
  public success: boolean = false;


  constructor(    private router: Router,
    private _HTTP: HttpClient,
    private _TOAST       : ToastController,
    private storage: Storage) {
      this.storage.get("idnum").then((id)=>{
        this.idnum = id;
      });
     }

  
  ionViewDidEnter() : void
  {
    this.retrieve();
  }

  getData(){
    
    
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
          console.dir(this.items[i].ID_NUM);
          console.dir(this.idnum);
          if(this.idnum == this.items[i].ID_NUM){
            this.sport.push(this.items[i].SPORT);
            
            if (this.items[i].DISTANCE == null){
              this.distance.push("null");
            }else{
              this.distance.push(this.items[i].DISTANCE);
            }
            this.time.push(this.items[i].TIME);
            this.date.push(this.items[i].DATE);
            console.dir(this.items[i].DATE)
            this.calories.push(this.items[i].CALORIES);
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
