import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-muser',
  templateUrl: './muser.page.html',
  styleUrls: ['./muser.page.scss'],
})



/*

ionViewDidEnter() : void
{
  this.retrieve();
}

if(USER_ID == this.items[i].USER_ID){
  let navigationExtras: NavigationExtras = {
    queryParams: {
      "idnum": this.items[i].ID_NUM,
      "neck": this.items[i].NECK,
      "hip": this.items[i].HIP,
      "thigh": this.items[i].THIGH,
      "belly": this.items[i].BELLY,
      "bicep": this.items[i].BICEP,
    }
  };
        //this.router.navigate(['/muser']);
        this.router.navigate(['/measurements'], navigationExtras);
      }
    }
    //navExtras for muser?
    //['/measurements'] for ['/muser']?
    //Can I just retrieve info on the html muser page?
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

//*/


export class MuserPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
