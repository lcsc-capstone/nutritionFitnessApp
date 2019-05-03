import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


//*
@Component({
  selector: 'app-muser',
  templateUrl: './muser.page.html',
  styleUrls: ['./muser.page.scss'],
})


export class MuserPage implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  public idnum: any;
  public neck: any;
  public hip: any;
  public thigh: any;
  public belly: any;
  public bicep: any;
  public date: any;
  public success: boolean = false;
  private _HOST : string  =  "http://18.191.160.170:5000/";


  public items : Array<any>;
  constructor(
    private _HTTP: HttpClient,private router: Router
    ) {}


    ionViewDidEnter() : void
   {
      this.retrieve();
      for(let i=0; i<this.items.length; i++){
        if(this.idnum == this.items[i].ID_NUM){
         this.neck = this.items[i].NECK;
         this.hip = this.items[i].NECK;
         this.thigh = this.items[i].NECK;
         this.belly = this.items[i].NECK;
         this.bicep = this.items[i].NECK;
         this.date = this.items[i].NECK;
       }
     };
   }

   return(){
    this.router.navigate(['/measurements']);
   }

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
  }

//*/

