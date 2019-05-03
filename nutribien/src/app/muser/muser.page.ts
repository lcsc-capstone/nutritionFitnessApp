import { Component, OnInit, ViewChild, Inject, LOCALE_ID } from '@angular/core';
import { CalendarComponent } from 'ionic2-calendar/calendar';
import { AlertController } from '@ionic/angular';
import { formatDate } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-muser',
  templateUrl: './muser.page.html',
  styleUrls: ['./muser.page.scss'],
})

export class MuserPage implements OnInit 
{

  private _HOST : string  =  "http://18.191.160.170:5000/"
  public items : Array<any>;
  constructor(private router: Router, private storage: Storage, private _HTTP: HttpClient){}

  private idnum: any;
  

  //doc = 
  //{
    //idnum: '',
    neck: any;
    hip: any;
    thigh: any;
    belly: any;
    bicep: any;
    date: any;
    success: false;
  
  //}

  ionViewDidEnter(){
    this.storage.get("idnum").then((data)=>{
      this.idnum = data;
      console.log(this.idnum);
    });

    let headers = new HttpHeaders({ 'Content-Type': 'application/json' }),
    url = this._HOST + "api/nutriFit.measurements";

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

           this.neck = entry.NECK;
           //console.log(entry);
           console.log(this.idnum);
           this.hip = entry.HIP;
           console.log(this.hip);
           this.thigh = entry.THIGH;
           this.belly = entry.BELLY;
           this.bicep = entry.BICEP;
           this.date = entry.DATE;
         }
       }
    },
    (error : any) =>
    {
       console.dir(error);
    });
  }


/*

  ionViewDidEnter() : void
  {
    this.retrieve();
    for(let i=0; i<this.items.length; i++)
    {
      if(this.idnum == this.items[i].ID_NUM)
      {
       this.neck = this.items[i].NECK;
       this.hip = this.items[i].NECK;
       this.thigh = this.items[i].NECK;
       this.belly = this.items[i].NECK;
       this.bicep = this.items[i].NECK;
       this.date = this.items[i].NECK;
       console.log(this.idnum);
       console.log(this.neck);
       console.log(this.hip);
     }
   };
  }


*/

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

  ngOnInit(){

  }
  

}

//*/
/*ERModeling, desc and ask th ir moeling or representation
disjoynes superclass, 
sql and relational algebra 1 multiple choice and one to write
Unions nested queries, joyns, grouping, involving, nulls, having.
Relational algebra Select project, rename union, miness, cartician product, joyn, division, grouping, agregates
inveded sql on C or Java. 
10.10 or something like this: where is the connection 
*/
