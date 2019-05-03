import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';



@Component({
  selector: 'app-muser',
  templateUrl: './muser.page.html',
  styleUrls: ['./muser.page.scss'],
})

export class MuserPage implements OnInit {

  private _HOST : string  =  "http://18.191.160.170:5000/"
  public items : Array<any>;
  constructor(private _HTTP: HttpClient,private router: Router) {}

  viewTitle: any;
  private idnum: any;
  private neck: any;
  private hip: any;
  private thigh: any;
  private belly: any;
  private bicep: any;
  private date: any;

  




  
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }



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
     }
   };
  }


  doc = 
  {
    idnum: '',
    neck: '',
    hip: '',
    thigh: '',
    belly: '',
    bicep: '',
    date: '',
    success: false,
  
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
/*ERModeling, desc and ask th ir moeling or representation
disjoynes superclass, 
sql and relational algebra 1 multiple choice and one to write
Unions nested queries, joyns, grouping, involving, nulls, having.
Relational algebra Select project, rename union, miness, cartician product, joyn, division, grouping, agregates
inveded sql on C or Java. 
10.10 or something like this: where is the connection 
*/
