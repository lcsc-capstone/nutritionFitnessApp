import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { Router } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
   public fName: string;

   public constructor(
     private route: ActivatedRoute,
    private router: Router) {
      this.route.queryParams.subscribe(params => {
          this.fName = params["fname"] ;
      });
  }
  workout(){
    this.router.navigate(['workout']);
  }
  measurements(){
    this.router.navigate(['measurements']);
  }
  nutrition(){
    this.router.navigate(['nutrition']);
  }

 

  ngOnInit() {
  }

}
