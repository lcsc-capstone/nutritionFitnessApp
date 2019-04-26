import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
   public fName: string;

   public constructor(private route: ActivatedRoute) {
      this.route.queryParams.subscribe(params => {
          this.fName = params["fname"] ;
      });
  }
 

  ngOnInit() {
  }

}
